let form = document.querySelector('.addBook');
let content = document.querySelector('.content');

let library = [];
/* constructor */
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${author}, ${pages}`
    } 
    
}
let theHobbit = new book('Some title', 'me', '123')
console.log(theHobbit.info())
function addBook(event) {
    event.preventDefault();
    let title = document.querySelector('.title').value;
    let author = document.querySelector('.author').value;
    let pages = document.querySelector('.pages').value;
    let read = document.querySelector('.read');
    (read.checked) ? read = 'read': read = 'notRead'; 
    let bookInfo = new book(title, author, pages, read);
    if (title === '' || author === '') return;
    library.push(bookInfo)
    content.innerHTML = ''

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

        if (library[i].read === 'notRead') {
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
    }
}


