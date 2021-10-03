# coding: utf-8
from flask import *
import home

app = Flask('intclock')

@app.route('/')
def Home():
    return home.Get()
