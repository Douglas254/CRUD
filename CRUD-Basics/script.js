let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// button click submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("button clicked");
  formValidation();
});

const formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post can not be blank";
    // console.log("failure");
  } else {
    msg.innerHTML = "";
    // console.log("success");
    acceptData();
  }
};

// accept and store data
let data = {};

const acceptData = () => {
  // push data to the data object
  data["text"] = input.value;
  //   console.log(data);
  createPost();
};

// for post creation
const createPost = () => {
  posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
  `;
  input.value = "";
};

// for post deletion
const deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

// for editing post
const editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
