// book container
const bookContainer = document.querySelector('.book-container');

// book card
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');

// input from user
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pageInput = document.querySelector('#page-input');
const submitBtn = document.querySelector('#submit');

// form container
const formContainer = document.querySelector('.form-container');

// new book button
const newBook = document.querySelector('#new-book');


// book class
class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }
}

// event listener for the "+ NEW BOOK" button to show form
newBook.addEventListener('click', () => {
    formContainer.style = "display: block;"
})


// event listener for the book submit form
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let book1 = new Book(titleInput.value, authorInput.value, pageInput.value);
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML = 
    `<p id="title">"${book1.name}"</p>
    <p id="author">${book1.author}</p>
    <p id="pages">${book1.pages}</p>
    `;
    bookDiv.classList.add('book');
    bookContainer.appendChild(bookDiv);
})
