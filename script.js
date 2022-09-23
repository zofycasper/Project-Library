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
        cardCheck.classList.add(`cardCheck`);
        readDiv.classList.add(`read${x}`);

        card.setAttribute("id", `card${x}`);
        cardCheck.setAttribute("type", "checkbox");
        cardCheck.setAttribute("id", `cardCheck${x}`);

        libraryArea.appendChild(card);
        titleDiv.textContent = `title: ${myLibrary[x].title}`;
        authorDiv.textContent = `author: ${myLibrary[x].author}`;
        pagesDiv.textContent = `pages: ${myLibrary[x].pages}`;
        readDiv.textContent = `read: ${myLibrary[x].read}`;

        card.appendChild(titleDiv);
        card.appendChild(authorDiv);
        card.appendChild(pagesDiv);
        card.appendChild(readDiv);
        card.appendChild(cardCheck);

        document.querySelector(`#cardCheck${x}`).checked = myLibrary[x].read;
        let checkBox = document.querySelector(`#cardCheck${x}`);
        console.log(checkBox);
    }

    changeRead();

    // readChecks = document.querySelectorAll(".card");
    // console.log(readChecks);

    // readChecks.forEach((i) => {
    //     i.addEventListener("click", () => {
    //         let iId = i.getAttribute("id");
    //         console.log(iId);

    //         // change read status

    //         if (myLibrary[iId].read == true) {
    //             myLibrary[iId].read = false;
    //             document.querySelector(`.cardCheck${iId}`).checked =
    //                 myLibrary[iId].read;
    //         } else if (myLibrary[iId].read == false) {
    //             myLibrary[iId].read = true;
    //             document.querySelector(`.cardCheck${iId}`).checked =
    //                 myLibrary[iId].read;
    //         }

    //         console.log(myLibrary[iId].read);

    //         let cardId = document.getElementById(`${iId}`);
    //         console.log("cardId:");
    //         console.log(cardId);

    //         // get read div
    //         let oldRead = document.querySelector(`.read${iId}`);
    //         oldRead.textContent = `read: ${myLibrary[iId].read}`;
    //     });
    // });
});

function changeRead() {
    readChecks = document.querySelectorAll(".cardCheck");
    console.log(readChecks);

    readChecks.forEach((i) => {
        i.addEventListener("click", () => {
            let iId = i.getAttribute("id").replace(/[^0-9]/gi, "");
            console.log("iId:");
            console.log(iId);

            // change read status

            if (myLibrary[iId].read == true) {
                myLibrary[iId].read = false;
                document.querySelector(`#cardCheck${iId}`).checked =
                    myLibrary[iId].read;
            } else if (myLibrary[iId].read == false) {
                myLibrary[iId].read = true;
                document.querySelector(`#cardCheck${iId}`).checked =
                    myLibrary[iId].read;
            }

            console.log(myLibrary[iId].read);

            let cardId = document.getElementById(`${iId}`);
            console.log("cardId:");
            console.log(cardId);

            // get read div
            let oldRead = document.querySelector(`.read${iId}`);
            oldRead.textContent = `read: ${myLibrary[iId].read}`;
        });
    });
}
