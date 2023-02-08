const inputId = document.querySelector(".id");
const inputPw = document.querySelector(".pw");
const inputBtn = document.querySelector("login-btn");
const inputTest = document.querySelector(".test");

const loginApi = {
    id: "",
    pw: "",
}

// function loginF() {
//     let valueId = inputId.value;
//     let valuePw = inputPw.value;
//     loginApi.id = inputId.value;
//     loginApi.pw = inputPw.value;
//     fetch("url", {
//         method: 'GET',
//         body: JSON.stringify(loginApi),
//     })
//         .then((response) => {
//             if (response == true) {
//                 location.href = 'hello.html';
//             }
//         })
// }

function loginF() {
    loginApi.id = inputId.value;
    loginApi.pw = inputPw.value;
    if (loginApi.id === 'merge' && loginApi.pw === '123') {
        location.href = '/hello.html';
    } else {
        alert('아이디 비번이 머지?');
    }
}

inputTest.addEventListener('click', loginF);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        loginF();
    }
})