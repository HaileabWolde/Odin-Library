const dialog = document.getElementById('myDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');

openBtn.addEventListener('click', () => {
    dialog.showModal();  // Use 'show()' if you want a non-modal dialog.
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});