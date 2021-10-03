var Redis = require('./redis.js')

var redis = new Redis();

var ClassesMaintainer = function(){
    // this.classesArray = [
    //     ["","","","",""],
    //     ["柔道","数分","信物","信概","数分习题"],
    //     [""   ,"高代",""   ,""    ,"高代习题"],
    //     ["数分","信物","计概","军理",""       ],
    //     ["高代",""   ,""   ,"思修","地震概论"],
    //     ["形策","计概","计概上机",""   ,""       ],
    //     ["","","","",""]
    // ];
    this.timeOfClass = [
        {"start": 0800, "end": 0950},
        {"start": 1010, "end": 1200},
        {"start": 1300, "end": 1450},
        {"start": 1510, "end": 1700},
        {"start": 1840, "end": 2030},
    ]
    this.classesDetail = [
        [{},{},{},{},{}],
        [{},{},{},{},{}],
        [{},{},{},{},{}],
        [{},{},{},{},{}],
        [{},{},{},{},{}],
        [{},{},{},{},{}],
        [{},{},{},{},{}],
    ];
    var _this = this;
    function AddClass(day,nth,name,isReviewNeeded){
        var randomNumber = Math.floor(Math.random()*100000);
        _this.classesDetail[day][nth-1] = {"id": randomNumber, "name": name, "isReviewNeeded": isReviewNeeded};
    }
    AddClass(1,1,"柔道",false);
    AddClass(1,2,"数分",true);
    AddClass(1,3,"信物",true);
    AddClass(1,4,"信概",false);
    AddClass(1,5,"数分习题",true);
    AddClass(2,2,"高代",true);
    AddClass(2,5,"高代习题",true);
    AddClass(3,1,"数分",true);
    AddClass(3,2,"信物",true);
    AddClass(3,3,"计概",true);
    AddClass(3,4,"军理",true);
    AddClass(4,1,"高代",true);
    AddClass(4,4,"思修",true);
    AddClass(4,5,"地震概论",true);
    AddClass(5,1,"形策",true);
    AddClass(5,2,"计概",true);
    AddClass(5,3,"计概上机",true);
    this.GetClassesByDay = function(day){
        return this.classesDetail[day];
    }
}

/*
redis 中的队列 intclock:reviewQueue 中有
*/
var ReviewQueueAdder = function(){
    var classMaintainer = new ClassesMaintainer();
    var AddClassToQueue = function(classDetail){
        
    }
}

var main = function(){
    var classMaintainer = new ClassesMaintainer();
}

main()
