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

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        return fs
        .readFile("./src/database/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
    }

    static getUsersInfo(id) {
        return fs
            .readFile("./src/database/users.json")
            .then((data) => {
                return this.#getUsersInfo(data, id);
            })
            .catch(console.error);
    }


    static async save(userInfo) {
        const users = await this.getUsers(true); // true이면 모든 데이터 가져오겠다.
        console.log(users);
        // 데이터 추가
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("./src/database/users.json", JSON.stringify(users));
        return {success: true};
    }
}

module.exports = UserStorage
