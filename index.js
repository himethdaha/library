const addnewBook = document.querySelector(".new-book");
const showBooks = document.querySelector(".show-books");
const closeForm = document.querySelector(".close-form");
const bookForm = document.querySelector(".new-book-form");
const submitForm = document.querySelector(".submit");
const body = document.getElementsByTagName("body")[0];
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const table = document.querySelector(".table");
const allDivs = document.getElementsByClassName("row");

let myLibrary = [];
//Object to store the values
let book;
let div;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Fuction called when the submit form button is clicked
function addBookToLibrary() {
  //Check if pages is a number
  if (!parseInt(pages.value)) {
    alert("Pages must be a number");
  } else {
    book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);
    console.log(myLibrary);
  }
}

//Function to show all the books
function showAllBooks() {
  //Get the length of the array
  const length = myLibrary.length;
  console.log(length);
  //create grid rows for the length of the array
  myLibrary.forEach((obj) => {
    for (let i = 1; i <= 4; i++) {
      div = document.createElement("div");
      div.classList.add(`row`);
      div.classList.add(`row-${i}`);

      if (div.classList.contains(`row-${1}`)) {
        div.innerHTML = obj.title;
      }
      if (div.classList.contains(`row-${2}`)) {
        div.innerHTML = obj.author;
      }
      if (div.classList.contains(`row-${3}`)) {
        div.innerHTML = obj.pages;
      }
      if (div.classList.contains(`row-${4}`)) {
        div.innerHTML = obj.read;
      }

      table.appendChild(div);
    }
  });
}

//Add New Book button event listener
addnewBook.addEventListener("click", function () {
  //Bring in the form
  bookForm.classList.add("active");
});

//close form
closeForm.addEventListener("click", function () {
  bookForm.classList.remove("active");
});

//Submit button listener
//Get user input
submitForm.addEventListener("click", function (e) {
  e.preventDefault();
  addBookToLibrary();
});

//Show books event listener
showBooks.addEventListener("click", function () {
  showAllBooks();
});
