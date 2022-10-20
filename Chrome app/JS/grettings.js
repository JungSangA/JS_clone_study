const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    // value를 저장하고, hidden 클래스 추가
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // localStorage에 data 저장
    localStorage.setItem(USERNAME_KEY, username);

    paintGreeting(username);

}

// h1 태그에 value값을 넣고, hidden 클래스 삭제
// greeting.innerText = "Hello! " + username;
function paintGreeting(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello! ${username}`;
}


// localStorage에 data가 있는지 없는지 확인해서 form을 띄울지 말지 정하기
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}