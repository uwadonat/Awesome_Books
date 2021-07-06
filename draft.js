const title = document.getElementById('title_input');
const author = document.getElementById('author_input');
const btn = document.getElementById('submit_btn');
const showcase = document.getElementById('showcase');
const mainCont = document.createElement('div');

showcase.appendChild(mainCont);
let myLibrary = [];

let libBooks = localStorage.getItem('books');

class bookClass {
  constructor(title, author) {
  this.title = title;
  this.author = author;
  }
  add () {
    
      myLibrary.push(newBook);
      localStorage.setItem('books', JSON.stringify(myLibrary));
      libBooks = localStorage.getItem('books');

  while (mainCont.firstChild) {
    mainCont.removeChild(mainCont.firstChild);
  }

  if (libBooks) {
    // eslint-disable-next-line no-undef, array-callback-return
    books = JSON.parse(libBooks).map((book) => {
      const bookCont = document.createElement('div');
      mainCont.appendChild(bookCont);
      const bookTitle = document.createElement('p');
      const bookAuthor = document.createElement('p');
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Delete';
      removeBtn.addEventListener('click', () => {
        bookCont.remove();
        libBooks = JSON.parse(localStorage.getItem('books'));
        libBooks.forEach((bookStored) => {
          if (bookStored.title === bookTitle.textContent) {
            myLibrary.splice(myLibrary.indexOf(bookStored), 1);
            libBooks.splice(libBooks.indexOf(bookStored), 1);
            localStorage.setItem('books', JSON.stringify(libBooks));
          }
        });
      });
     
      bookCont.appendChild(bookTitle);
      bookCont.appendChild(bookAuthor);
      bookCont.appendChild(removeBtn);
      
      bookTitle.textContent = newBook.title;
      bookAuthor.textContent = newBook.author;
      title.value = '';
      author.value = '';
        
    });
  }
      // addToDom(); // eslint-disable-line no-use-before-define
      
  
  }
}
let  newBook = new bookClass(title.value, author.value)
btn.addEventListener('click',() => {
  newBook.add();
})



