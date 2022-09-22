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

        let titleDiv = document.createElement("div");
        let authorDiv = document.createElement("div");
        let pagesDiv = document.createElement("div");
        let readDiv = document.createElement("div");

        card.classList.add(`card`);
        cardCheck.classList.add(`cardCheck${x}`);

        card.setAttribute("id", `${x}`);
        cardCheck.setAttribute("type", "checkbox");
        cardCheck.setAttribute("id", "cardCheck");
        // cardCheck.setAttribute("onclick", "checkClick()");

        // let cardRead = document.querySelector(`".cardCheck${x}"`).checked;
        // if (read == true) {
        //     cardRead = true;
        // } else {
        //     cardRead = false;
        // }

        libraryArea.appendChild(card);
        titleDiv.textContent = `title: ${myLibrary[x].title}`;
        authorDiv.textContent = `author: ${myLibrary[x].author}`;
        pagesDiv.textContent = `pages: ${myLibrary[x].pages}`;
        readDiv.textContent = `read: ${myLibrary[x].read}`;
        // card.textContent =
        //     `title: ${myLibrary[x].title}` +
        //     `Author: ${myLibrary[x].author}` +
        //     `Pages: ${myLibrary[x].pages}` +
        //     `Read: ${myLibrary[x].read}`;

        card.appendChild(titleDiv);
        card.appendChild(authorDiv);
        card.appendChild(pagesDiv);
        card.appendChild(readDiv);
        card.appendChild(cardCheck);

        document.querySelector(`.cardCheck${x}`).checked = myLibrary[x].read;
        let checkBox = document.querySelector(`.cardCheck${x}`);
        console.log(checkBox);
    }
    readChecks = document.querySelectorAll(".card");
    console.log(readChecks);
    readChecks.forEach((i) => {
        i.addEventListener("click", () => {
            let iId = i.getAttribute("id");
            console.log(iId);

            // change read status

            if (myLibrary[iId].read == true) {
                myLibrary[iId].read = false;
            } else if (myLibrary[iId].read == false) {
                myLibrary[iId].read = true;
            }

            console.log(myLibrary[iId].read);

            let cardId = document.getElementById(`${iId}`);
            console.log(cardId);
            // cardId.textContent = "";
            titleDiv.textContent = `title: ${myLibrary[iId].title}`;
            authorDiv.textContent = `author: ${myLibrary[iId].author}`;
            pagesDiv.textContent = `pages: ${myLibrary[iId].pages}`;
            readDiv.textContent = `read: ${myLibrary[iId].read}`;
        });
    });
});

// window.addEventListener("click", (e) => {
//     console.log(e.target);
// });

// function checkClick() {
//     console.log();
// }

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
