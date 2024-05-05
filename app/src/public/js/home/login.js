"use strict";

// DOM (Document Object Model)
const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    }; 
    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        body: JSON.stringify(req)
    })
}