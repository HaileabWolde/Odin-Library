const dialog = document.querySelector('.myDialog');
const openBtn = document.querySelector('.openDialog');
const closeBtn = document.getElementById('closeDialog');
const title = document.getElementById('title')
const form = document.getElementById('myform');
const author = document.getElementById('author');
const total = document.getElementById('total');
const read = document.getElementById('read');
const completed = document.getElementById('completed');
const addBookBtn = document.getElementById('addBook');
const pageError = document.getElementById('pageError');
const authorError = document.getElementById('authorError');
const booksContainer = document.querySelector('.books');
const myLibrary = [];
const regex = /^[a-zA-Z]+$/;

function Book(title, author, total, completed, checked, index){
    this.title = title;
    this.author = author;
    this.total = total;
    this.completed = completed;
    this.read = checked;
    this.index = index;
}
function addCardContent(card, book){
    card.innerHTML = ''; // Clear existing content
    card.style.backgroundColor = "white";
    card.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.completed}/${book.total}</p>
        <p>Read: ${book.read ? 'Yes' : 'No'}</p>
    `;
}
function addBookContent(){
    const allBooks = document.querySelectorAll('.bookcard')
    allBooks.forEach((book, index) => {
        if(index < myLibrary.length){
        addCardContent(book, myLibrary[index]);
        }
    })
   }

function createAnotherAdd(){
    const newDiv = document.createElement("div");
    newDiv.className = "bookcard";
    const otherspan = document.createElement("span");
    otherspan.className = "openDialog";
    otherspan.textContent = "+";
    otherspan.addEventListener('click', () => {
        dialog.showModal();  // Use 'show()' if you want a non-modal dialog.
    })
    newDiv.appendChild(otherspan);
    newDiv.appendChild(dialog);
    booksContainer.appendChild(newDiv);
}

function addBookToLibrary(event) {
    event.preventDefault();
    if(!regex.test(author.value) || !(author.value)){
        author.style.borderBottom = "2px solid red";
        authorError.style.display = "block";
        authorError.textContent = "Authore Should Only Contain Alphabetic values"
        authorError.style.color = '#EA0063';
        return;
    }
    if(completed.value > total.value){
        completed.style.borderBottom = "2px solid red";
        pageError.style.display = "block";
        pageError.textContent = "Completed pages cannot be more than total pages";
        pageError.style.color = '#EA0063';
        authorError.style.display = "none";
        author.style.borderBottom = "2px solid #54ACDB";
        return;
    }
    else{
        const book = new Book(title.value, author.value, total.value, completed.value, read.checked, myLibrary.length);
        myLibrary.push(book);
        console.log(myLibrary)
        pageError.style.display = "none";
        completed.style.borderBottom = '2px solid #54ACDB';
        authorError.style.display = "none";
        author.style.borderBottom = "2px solid #54ACDB";
        dialog.close();
        form.reset();
        addBookContent();
        createAnotherAdd();
        // Further handling here
    }
}
openBtn.addEventListener('click', () => {
    dialog.showModal();  // Use 'show()' if you want a non-modal dialog.
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});
addBookBtn.addEventListener('click', addBookToLibrary)
