"use strict";

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
        password = req.body.password;

        const users = UserStorage.getUsers("id", "password");
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id); 
            if (users.password[idx] === password) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패했습니다.";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};