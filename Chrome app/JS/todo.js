const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

// toDos array생성 -> array에 todo가 있을경우 복원을 위해서 let으로 선언
let toDos = [];

// localStorage에 todos를 key값으로 toDOS의 배열의 값들을 JSON형태로 저장
function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// localStorage에 저장된 id값을 primaryKey라고 특정지어 삭제
// filter함수를 이용하여 toDos array 재할당
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDo();
}

// 새로운 todo생성시 li,span,button을 각각 만들어 id를 toDoList로 갖는 ul태그 아래 생성
function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
    console.log(li);
}

// id를 toDoForm로 갖는 form형태를 "submit"을 했을 때 실행 함수
function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    // const newToDo = document.createElement("li");
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);

    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage에 저장된 todos의 value값을 가져오고,
// null값이 아닐경우 foreach함수를 이용하여 모든 요소를 toDoList에 추가해주고,
// todos array에 모두 재할당해준다.
const saveToDos = localStorage.getItem(TODOS_KEY);
if (saveToDos) {
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}