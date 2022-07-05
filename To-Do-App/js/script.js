let form = document.getElementById("form");
let msg = document.getElementById("msg");

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
  }
};
