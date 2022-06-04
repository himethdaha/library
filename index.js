const addnewBook = document.querySelector(".new-Book");
const closeForm = document.querySelector(".close-form");
const bookForm = document.querySelector(".new-book-form");
const body = document.getElementsByTagName("body");

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
  //Make this inherit from Book prototype
  //Push object to array
}

//Add New Book button event listener
addnewBook.addEventListener("click", function () {
  //Bring in the form
  bookForm.classList.add("form-active");
});

//close form
closeForm.addEventListener("click", function () {
  bookForm.classList.remove("form-active");
});
