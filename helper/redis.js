var redis = require('redis')
var util = require('util')

module.exports = function(){
	redisConfig = {
		"host": "127.0.0.1",
		"port": 6379,
		"pass": ""
	}
	var redisClient = redis.createClient(redisConfig.port,redisConfig.host);
	redisClient.on('error',function(err){
		console.error(err);
	}).on('connect',function(err){
		console.log('已连接到 redis 服务器');
	});

	if( redisConfig.pass && redisConfig.pass != "" )
		redisClient.auth(redisConfig.pass,function(err){
			if(err) console.error('redis 的密码似乎不正确...');
		});

	var cmd = function(command,args,callback){
		redisClient[command](args,function(err,res){
			if(err) console.error('Redis error',err);
			if(callback) callback(err,res);
		});
	}

	this.cmd = cmd;
	this.cmdSync = util.promisify(cmd);
}
