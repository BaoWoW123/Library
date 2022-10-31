let addBook = document.querySelector('.addBook');
let content = document.querySelector('.content');

addBook.addEventListener('click', () => {
    let book = document.createElement('div');
    book.className = 'book'
    book.textContent='Test';
    content.appendChild(book)

});