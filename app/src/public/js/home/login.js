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
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/" // 루트 경로로 이동
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
};