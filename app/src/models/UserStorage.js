"use strict";

const { reduce } = require("async");

class UserStorage {
    static #users = {
        id: ["woorimIT", "HALEY", "MINH"],
        password: ["123", "456", "789"],
        name: ["우리밋", "정현", "민"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage
