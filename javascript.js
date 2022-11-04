let form = document.querySelector('.addBook');
let content = document.querySelector('.content');

/* form.addEventListener('click', () => {
    let form = document.createElement('form');
    form.className = 'form'
    form.textContent='Book Info';
    content.appendChild(form)
}); */

let library = [];
/* constructor */
function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = () => {
        return `${title},${author},${pages}`
    } 
    
}
let theHobbit = new book('Some title', 'me', '123')
console.log(theHobbit.info())
function addBook() {
    let title = document.querySelector('.title').value;
    let author = document.querySelector('.author').value;
    let pages = document.querySelector('.pages').value;
    let bookInfo = new book(title, author, pages)
    if (title === '' || author === '') return;
    library.push(bookInfo)
    content.innerHTML = ''
    for (i = 0; i < library.length; i++) {
        /* display array into content */
        let div = document.createElement('div') 
        div.className = 'book'  
        div.textContent = library[i].info()
        content.appendChild(div)
    }
}


