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


// array of objects that stores the books
let books = [
    
]

// book class
class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }
}

// event listener for the book submit form
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let book1 = new Book(titleInput.value, authorInput.value, pageInput.value);
    console.log(book1.name);
    console.log(book1.author);
    console.log(book1.pages);


})
