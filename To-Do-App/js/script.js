let form = document.getElementById("form");
let msg = document.getElementById("msg");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");

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

let createTasks = () => {
  tasks.innerHTML += `
    <div>
        <span class="fw-bold">${data.text}</span>
        <span class="small text-secondary">${data.date}</span>
        <p>${data.description}</p>
        <span class="options">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
        </span>
    </div>`;
};
