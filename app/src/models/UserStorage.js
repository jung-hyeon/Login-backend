"use strict";

const { reject } = require("async");
const db = require("../config/db");

class UserStorage {
    static getUsersInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id],(err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]); 
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO as(id, name, password) VALUES(?, ?, ?);";
            db.query
                (query,
                [userInfo.id, userInfo.name, userInfo.password],
                (err) => {
                if (err) reject(`${err}`);
                else resolve({success: true}); 
            });
        });
    }
}

module.exports = UserStorage
