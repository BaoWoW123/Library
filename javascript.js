let content = document.querySelector('.content');

let library = [];
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(event) {
    event.preventDefault();
    let title = document.querySelector('.title').value;
    let author = document.querySelector('.author').value;
    let pages = document.querySelector('.pages').value;
    let read = document.querySelector('.read');
    (read.checked) ? read = true: read = false; 
    let bookInfo = new book(title, author, pages, read);
    if (title === '' || author === '') return;
    library.push(bookInfo)
    content.innerHTML = ''
    displayBooks()
}

function displayBooks() {
    for (i = 0; i < library.length; i++) {
        let div = document.createElement('div') 
        div.className = 'book';
        let divTitle = document.createElement('p')
        let divAuthor = document.createElement('p')
        let divPage = document.createElement('p');
        let readBtn = document.createElement('button')
        let remove = document.createElement('button')
        
        divTitle.textContent = trimTitle();
        divAuthor.textContent = trimAuthor();
        divPage = `Pages ${library[i].pages}`;

        if (library[i].read === false) {
            readBtn.className = 'readBtn-Not';
            readBtn.textContent = 'Not Read';
        }
        else {
            readBtn.className = 'readBtn-Read';
            readBtn.textContent = 'Read';
        }

        remove.className = 'remove'
        remove.textContent = 'X'
        
        content.append(div)
        div.append(divTitle)
        div.append(divAuthor)
        div.append(divPage)
        div.append(readBtn)
        div.append(remove)

        readBtn.addEventListener('click', toggleRead) 
        remove.dataset.index = i;
        remove.addEventListener('click', (i) => {
            library.splice(i.target.dataset.index, 1)
            removeData()
            content.innerHTML = '';
            displayBooks()
        })

    }
}
 
function removeData() {
    let removeBtns = document.querySelectorAll('.remove')
    removeBtns.forEach(btn => {btn.removeAttribute('data-index')})
 }   

function trimTitle() {
    return (library[i].title.length >= 20) ? 
        library[i].title.substring(0, 17) + '...':
        library[i].title;
}

function trimAuthor() {
    return (library[i].author.length >= 20) ? 
        library[i].author.substring(0, 17) + '...':
        library[i].author;
    }

  
function toggleRead(i) {
    if (i.target.className == 'readBtn-Read') {
        library[i.target.parentNode.lastChild.dataset.index].read = false;
        content.innerHTML='';
        displayBooks() ;
    }
    else {
        library[i.target.parentNode.lastChild.dataset.index].read = true;
        content.innerHTML='';
        displayBooks() ;
    }
}