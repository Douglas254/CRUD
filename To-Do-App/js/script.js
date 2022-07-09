let form = document.getElementById("form");
let msg = document.getElementById("msg");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// validate the form
const formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    //  IIFE (Immediately Invoked Function Expression) JS function that runs as soon as it is defined
    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

// accept and store data
let data = [];

// accept data and push it to the data object
let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  //   store on localStorage
  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};

// update the browser
let createTasks = () => {
  // each time loads clear task
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
        <span class="fw-bold">${x.text}</span>
        <span class="small text-secondary">${x.date}</span>
        <p>${x.description}</p>
        <span class="options">
        <i  onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
        <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>`);
  });

  resetForm();
};

// function for edit icon
let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  // // remove a task after edit
  // selectedTask.remove();
  deleteTask(e);
};

// function to delete a task
let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

// function to reset a form
let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

// IIFE
// get data from localStorage and put in the data array
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  createTasks();
  console.log(data);
})();
