"use strict";

const log = require("../../config/log");
const User = require("../../models/User");

const output = {
    home: (req, res) => {
    // 브라우저에서 요청을 받은 후 하는 기능
    log.info(`GET / 200 "홈 화면으로 이동"`);
    res.render("home/index");
    },
    login: (req, res) => {
        log.info(`GET / login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    register: (req, res) => {
        log.info(`GET / register 200 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if (response.err) {
            log.error(
                `POST / login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        }
        else {
            log.info(
                `POST / login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        }
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err) {
            log.error(
                `POST / register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        }
        else {
            log.info(
                `POST / register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        }
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};