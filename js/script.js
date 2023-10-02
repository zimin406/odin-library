const bookList = [];

function Book(title, author, publisher) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.isRead = false;
}

const book1 = new Book("Strike of Celeste", "Fiona Maralyn", "CalmPages");
bookList.push(book1);

const bookTable = document.querySelector("table.books>tbody");

window.addEventListener("load", (event) => {
    for(book of bookList) {
        const bookRow = document.createElement("tr");

        const bookTitle = document.createElement("td");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = book.title;
        bookRow.appendChild(bookTitle);

        const bookAuthor = document.createElement("td");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = book.author;
        bookRow.appendChild(bookAuthor);

        const bookPublisher = document.createElement("td");
        bookPublisher.classList.add("book-publisher");
        bookPublisher.textContent = book.publisher;
        bookRow.appendChild(bookPublisher);

        const bookIsRead = document.createElement("td");
        bookIsRead.classList.add("book-is-read");
        bookIsRead.textContent = book.isRead ? "Yes" : "No";
        bookRow.appendChild(bookIsRead);

        const markReadCell = document.createElement("td");
        markReadCell.classList.add("mark-raed");
        const markReadButton = document.createElement("button");
        markReadButton.textContent = "Mark Read";
        markReadCell.appendChild(markReadButton);
        bookRow.appendChild(markReadCell);
        
        const removeBookCell = document.createElement("td");
        removeBookCell.classList.add("remove-book")
        const removeBookButton = document.createElement("button");
        removeBookButton.textContent = "Remove Book";
        removeBookButton.classList.add("remove-book-button");
        removeBookCell.appendChild(removeBookButton);
        bookRow.appendChild(removeBookCell);

        bookTable.appendChild(bookRow);

    }
})




