let myLibrary = [];

const sidebar = document.querySelector(".sidebar");
const libraryArea = document.querySelector(".main");
let readChecks = document.querySelectorAll("#cardCheck");

// get book details from user input
let bookTitle;

const button = document.querySelector(".add-book");

addBookToLibrary();
removeCard();
changeRead();

function Book() {
    // the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    button.addEventListener("click", () => {
        title = document.getElementById("title").value;
        author = document.getElementById("author").value;
        pages = document.getElementById("pages").value;
        read = document.getElementById("read").checked;

        let book = new Book(title, author, pages, read);
        myLibrary.push(book);

        console.log("myLibrary:");
        console.log(myLibrary);

        updateLibraryArea();

        changeRead();

        removeCard();
    });
}

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

function removeCard() {
    let removes = document.querySelectorAll(".remove");
    console.log("removes:");
    console.log(removes);

    removes.forEach((remove) => {
        remove.addEventListener("click", () => {
            let removeId = remove.getAttribute("id").replace(/[^0-9]/gi, "");
            console.log("removeId:");
            console.log(removeId);
            let rmCard = document.getElementById(`card${removeId}`);
            console.log("rmCard:");
            console.log(rmCard);
            myLibrary.splice(removeId, 1);

            updateLibraryArea();
            // libraryArea.removeChild(rmCard);
            console.log("myLibrary:");
            console.log(myLibrary);
            removeCard();
            changeRead();
        });
    });
}

function updateLibraryArea() {
    libraryArea.textContent = "";

    for (x in myLibrary) {
        let card = document.createElement("div");
        let cardCheck = document.createElement("input");
        let removeButton = document.createElement("button");

        let titleDiv = document.createElement("div");
        let authorDiv = document.createElement("div");
        let pagesDiv = document.createElement("div");
        let readDiv = document.createElement("div");

        card.classList.add(`card`);
        cardCheck.classList.add(`cardCheck`);
        readDiv.classList.add(`read${x}`);
        removeButton.classList.add("remove");

        removeButton.setAttribute("id", `remove${x}`);
        card.setAttribute("id", `card${x}`);
        cardCheck.setAttribute("type", "checkbox");
        cardCheck.setAttribute("id", `cardCheck${x}`);

        libraryArea.appendChild(card);
        titleDiv.textContent = `title: ${myLibrary[x].title}`;
        authorDiv.textContent = `author: ${myLibrary[x].author}`;
        pagesDiv.textContent = `pages: ${myLibrary[x].pages}`;
        readDiv.textContent = `read: ${myLibrary[x].read}`;
        removeButton.textContent = "remove";

        card.appendChild(titleDiv);
        card.appendChild(authorDiv);
        card.appendChild(pagesDiv);
        card.appendChild(readDiv);
        card.appendChild(cardCheck);
        card.appendChild(removeButton);

        document.querySelector(`#cardCheck${x}`).checked = myLibrary[x].read;
        let checkBox = document.querySelector(`#cardCheck${x}`);
        console.log(checkBox);
    }
}
