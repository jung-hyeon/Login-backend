"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
    // 브라우저에서 요청을 받은 후 하는 기능
    res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};