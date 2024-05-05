"use strict";

const users = {
    id: ["woorimIT", "HALEY", "MINH"],
    password: ["123", "456", "789"],
};

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

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id); 
            if (users.password[idx] === password) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

module.exports = {
    output,
    process,
};