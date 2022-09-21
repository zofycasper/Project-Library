let myLibrary = [];

const sidebar = document.querySelector(".sidebar");

// get book details from user input
let bookTitle;

function Book() {
    // the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here
    (title = "the Hobbit"),
        (author = "J.R.R Tolkien"),
        (pages = "295"),
        (read = "Not read yet");
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary();
addBookToLibrary();
console.log(myLibrary[1].title);

const button = document.querySelector(".add-book");

button.addEventListener("click", () => {
    bookTitle = document.getElementById("title").value;
    const newBook = document.createElement("p");
    newBook.textContent = bookTitle;
    sidebar.appendChild(newBook);
});
