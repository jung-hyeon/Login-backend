"use strict";

const { log } = require("console");

const fs = require("fs").promises;

class UserStorage {
    static #getUsersInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => {id, password, name}
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
    
        return userInfo;
    }
    
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsersInfo(id) {
        return fs
            .readFile("./src/database/users.json")
            .then((data) => {
                return this.#getUsersInfo(data, id);
            })
            .catch(console.error);
    }


    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success: true};
    }
}

module.exports = UserStorage
