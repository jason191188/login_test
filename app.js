'use strict';

//모듈
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require('./routes/home');

//앱세팅
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/', express.static(__dirname + '/public')); 
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/',home);//use : 미들웨어를 등록해주는 매서드


module.exports = app;