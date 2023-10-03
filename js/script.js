const bookList = [];

function Book(title, author, publisher, isRead) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.isRead = isRead;
}


const book1 = new Book("Strike of Celeste", "Fiona Maralyn", "CalmPages");
bookList.push(book1);

const book2 = new Book("Abyss Fading", "Alton Dwain", "NEXTREAD");
bookList.push(book2);

const bookTable = document.querySelector("table.books>tbody");

const addBookButton = document.querySelector("button.add-book-button");

const addBookDialog = document.querySelector("dialog.add-book-dialog");

const addBookForm = document.querySelector("dialog.add-book-dialog>form");

const addBookDialogButton = document.querySelector("button.add-book-dialog-button");

function displayBooks() {
    for(let i = 0; i < bookList.length; i++) {
        const bookRow = document.createElement("tr");
        bookRow.setAttribute("data-book-index", i);

        const bookTitle = document.createElement("td");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = bookList[i].title;
        bookRow.appendChild(bookTitle);

        const bookAuthor = document.createElement("td");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = bookList[i].author;
        bookRow.appendChild(bookAuthor);

        const bookPublisher = document.createElement("td");
        bookPublisher.classList.add("book-publisher");
        bookPublisher.textContent = bookList[i].publisher;
        bookRow.appendChild(bookPublisher);

        const bookIsRead = document.createElement("td");
        bookIsRead.classList.add("book-is-read");
        bookIsRead.textContent = bookList[i].isRead ? "Yes" : "No";
        bookRow.appendChild(bookIsRead);

        const markReadCell = document.createElement("td");
        markReadCell.classList.add("mark-read");
        const markReadButton = document.createElement("button");
        markReadButton.textContent = bookList[i].isRead ? "Mark Unread" : "Mark Read";
        markReadButton.classList.add("mark-read-button");
        markReadButton.setAttribute("type", "button");

        markReadButton.addEventListener("click", (event) => {
            bookList[i].isRead = !bookList[i].isRead;
            markReadButton.textContent = bookList[i].isRead ? "Mark Unread" : "Mark Read";
        });
        markReadCell.appendChild(markReadButton);
        bookRow.appendChild(markReadCell);
        
        const removeBookCell = document.createElement("td");
        removeBookCell.classList.add("remove-book")
        const removeBookButton = document.createElement("button");
        removeBookButton.textContent = "Remove Book";
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.setAttribute("type", "button");

        removeBookButton.addEventListener("click", (event) => {
            bookList.splice(i, 1);
            while (bookTable.children.length > 0) {
                bookTable.firstChild.remove();
            }
            displayBooks();
        });

        removeBookCell.appendChild(removeBookButton);
        bookRow.appendChild(removeBookCell);

        for (child of bookRow.childNodes) {
            child.setAttribute("data-book-index", i);
        }
        bookTable.appendChild(bookRow);
    }
}

window.addEventListener("load", (event) => {
    displayBooks();
});

addBookButton.addEventListener("click", (event) => {
    addBookDialog.showModal();
});

addBookForm.addEventListener("submit", (event) => {
    console.log("submit");
});
