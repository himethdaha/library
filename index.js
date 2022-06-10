const addnewBook = document.querySelector(".new-book");
const removeBook = document.querySelector(".remove-book");
const removeBooks = document.querySelector(".remove-books");
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
const allHeaders = document.getElementsByClassName("heading");

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
  if (title.value == "" || author.value == "") {
    alert("Please fill out the fields");
  } else if (!parseInt(pages.value)) {
    alert("Pages must be a number");
  } else {
    book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);
    console.log(myLibrary);
  }
}

//Function called when remove a book button is clicked
function deleteBook() {
  let value = prompt(
    "Enter the Index of the book you want to delete",
    "Index starts from 0 :)"
  );

  let index = parseInt(value);
  console.log(index);

  if (typeof index !== "number" || isNaN(index)) {
    alert("Must be a number");
  }
  if (myLibrary.length === 0 || index < 0 || index >= myLibrary.length - 1) {
    alert("Index doesn't match a record ");
  } else {
    //Get the index
    let searchedVal = myLibrary.indexOf(index);
    //Remove it form the array
    myLibrary.splice(searchedVal, 1);
  }
}

//Function to delete all books
function deleteAllBooks() {
  myLibrary.splice(0, myLibrary.length);
}

//Function to show all the books
function showAllBooks() {
  //Get the length of the array
  const length = myLibrary.length;
  console.log(length);

  //If there is already a table clear it first
  if (table.firstChild) {
    table.innerHTML = "";
  }

  //Create the table headers
  let headerOne = document.createElement("div");
  headerOne.innerText = "title";
  headerOne.classList.add("heading");
  table.appendChild(headerOne);

  let headerTwo = document.createElement("div");
  headerTwo.innerText = "author";
  headerTwo.classList.add("heading");
  table.appendChild(headerTwo);

  let headerThree = document.createElement("div");
  headerThree.innerText = "pages";
  headerThree.classList.add("heading");
  table.appendChild(headerThree);

  let headerFour = document.createElement("div");
  headerFour.innerText = "status";
  headerFour.classList.add("heading");
  table.appendChild(headerFour);

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

//Deletebook event listener
removeBook.addEventListener("click", function () {
  deleteBook();
});

//DeleteAllBooks event listener
removeBooks.addEventListener("click", deleteAllBooks);

//Remove book event listener
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
