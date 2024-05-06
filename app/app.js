"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
dotenv.config();

const accessLogStream = require("./src/config/log");
// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); // __dirname은 app.js의 dirname
app.use(bodyParser.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev")); // 개발용 로그
app.use(morgan("common", { stream: accessLogStream})); // 로그 포멧 지정 가능 dev등 (npm 사이트 참고)
app.use("/", home); // use는 미들 웨어를 등록해주는 메서드

module.exports = app;