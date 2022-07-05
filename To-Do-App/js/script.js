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
let data = {};

// accept data and push it to the data object
let acceptData = () => {
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = textarea.value;
  console.log(data);
  createTasks();
};

// update the browser
let createTasks = () => {
  tasks.innerHTML += `
    <div>
        <span class="fw-bold">${data.text}</span>
        <span class="small text-secondary">${data.date}</span>
        <p>${data.description}</p>
        <span class="options">
        <i  onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
        <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>`;
  resetForm();
};

// function for edit icon
let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  // remove a task after edit
  selectedTask.remove();
};

// function to delete a task
let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};

// function to reset a form
let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};
