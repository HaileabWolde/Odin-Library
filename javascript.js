const dialog = document.getElementById('myDialog');
const openBtn = document.getElementById('openDialog');
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
const bookcard = document.getElementsByClassName('bookcard');
const myLibrary = [];
const regex = /^[a-zA-Z]+$/;

function Book(title, author, total, completed, checked){
    this.title = title;
    this.author = author;
    this.total = total;
    this.completed = completed;
    this.read = checked;
}

function createAnotherAdd(){
    const newDiv = document.createElement("div");
    newDiv.className = "bookcard";
    const otherspan = document.createElement("span");
    otherspan.id = "openDialog";
    otherspan.textContent = "+";
    newDiv.appendChild(otherspan);
    bookcard[0].parentNode.insertBefore(newDiv, bookcard[0]);
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
        const book = new Book(title.value, author.value, total.value, completed.value, read.checked);
        myLibrary.push(book);
        pageError.style.display = "none";
        completed.style.borderBottom = '2px solid #54ACDB';
        authorError.style.display = "none";
        author.style.borderBottom = "2px solid #54ACDB";
        dialog.close();
        form.reset();
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
