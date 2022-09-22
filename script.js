let myLibrary = [];

const sidebar = document.querySelector(".sidebar");
const libraryArea = document.querySelector(".main");
let readChecks = document.querySelectorAll("#cardCheck");

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
}

// title = document.getElementById("title").value;
// author = document.getElementById("author").value;
// pages = document.getElementById("pages").value;
// read = document.getElementById("read").value;

// let book = new Book(title, author, pages, read);

const button = document.querySelector(".add-book");

button.addEventListener("click", () => {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").checked;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

    console.log(myLibrary);
    libraryArea.textContent = "";

    for (x in myLibrary) {
        let card = document.createElement("div");
        let cardCheck = document.createElement("input");

        card.classList.add(`"card${x}"`);
        cardCheck.classList.add(`cardCheck${x}`);

        cardCheck.setAttribute("type", "checkbox");
        cardCheck.setAttribute("id", "cardCheck");
        cardCheck.setAttribute("onclick", "checkClick()");

        // let cardRead = document.querySelector(`".cardCheck${x}"`).checked;
        // if (read == true) {
        //     cardRead = true;
        // } else {
        //     cardRead = false;
        // }

        libraryArea.appendChild(card);
        card.textContent =
            `title: ${myLibrary[x].title}` +
            `Author: ${myLibrary[x].author}` +
            `Pages: ${myLibrary[x].pages}` +
            `Read: ${myLibrary[x].read}`;
        card.appendChild(cardCheck);

        document.querySelector(`.cardCheck${x}`).checked = myLibrary[x].read;
        let checkBox = document.querySelector(`.cardCheck${x}`);
        console.log(checkBox);
    }
    readChecks = document.querySelectorAll("#cardCheck");
    console.log(readChecks);
});

// readChecks.forEach((x) => {
//     x.addEventListener("click", () => {
//         console.log(`${x}clicked`);
//     });
// });

window.addEventListener("click", (e) => {
    console.log(e.target);
});

function checkClick() {
    console.log();
}

// addBookToLibrary();
// addBookToLibrary();
// console.log(myLibrary[1].title);

// const button = document.querySelector(".add-book");

// button.addEventListener("click", () => {
//     bookTitle = document.getElementById("title").value;
//     title = bookTitle;
//     addBookToLibrary();
//     const newBook = document.createElement("p");
//     newBook.textContent = bookTitle;
//     sidebar.appendChild(newBook);
// });

// // create card div

// const libraryArea = document.querySelector(".main");

// // get card content from myLibrary

// }

// // append card to main div
