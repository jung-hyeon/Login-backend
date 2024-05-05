"use strict";

const home = (req, res) => {
    // 브라우저에서 요청을 받은 후 하는 기능
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home, // key와 value가 같은 객체
    login,
};