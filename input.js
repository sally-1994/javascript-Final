'use strict'


export function ne(e){};

const form2 = document.getElementById('Login');

form2.addEventListener('submit',function ne (e) {
    e.preventDefault();


    let checkbox1 = document.getElementById('save');
    if (checkbox1.checked) {
        let usernameValue = document.getElementById('name').value;
        Cookies.set('saved-name',usernameValue)   
    } else{
        Cookies.remove('saved-name');
    }


    let checkbox2 = document.getElementById('save');
    if (checkbox2.checked) {
        let usernamepassword = document.getElementById('passw').value;
        Cookies.set('saved-pasw',usernamepassword)   
    } else{
        Cookies.remove('saved-pasw');
    }
    //e.target.submit();
})


//let savedUsername =Cookies.get('saved-name')
//if (savedUsername) {
    //document.getElementById('name').value=savedUsername;
    //document.getElementById('save').checkbox = true;
//}

//let savedUserpasw = Cookies.get('saved-pasw');
//if (savedUserpasw) {
    //document.getElementById('passw').value=savedUserpasw;
   // document.getElementById('save').checkbox = true;
//}





//todolisti
const list = document.getElementById("todo");
const btn = document.getElementById("btn-add");
const deleteall = document.getElementById('clear all');

// events
btn.addEventListener("click", handleClick);
document.addEventListener("DOMContentLoaded", loadToDos);

// 1.
 export  function handleClick() {
  console.log(this); //button
  const getInputValue = this.previousElementSibling.value.trim();
  console.log(getInputValue);

  if (getInputValue) {
    createToDo(getInputValue);
    saveToStorage(getInputValue);
    this.previousElementSibling.value = " ";
  } else {
    alert("input field is empty");
  }
}

// 2.
 export  function createToDo(text) {
    const li = document.createElement("li");
    li.innerText = text;
  
    list.appendChild(li);
  }
  
  // 3.
  export   function saveToStorage(todo) {
    const todos = JSON.parse(localStorage.getItem("tasks")) || [];
  
    localStorage.setItem("tasks", JSON.stringify([...todos, todo]));
  }
  
  // 4.
   export  function loadToDos() {
    const todos = JSON.parse(localStorage.getItem("tasks"));
  
    if (todos) {
      todos.forEach((el) => createToDo(el));
    }
  }
  

  deleteall.addEventListener('click',function dlt() {
    list.innerHTML = "";
    
})
  
  export function dlt() {
    
  }
  



