const title = document.getElementById("title_input");
const author = document.getElementById("author_input");
const btn = document.getElementById("submit_btn");
const showcase = document.getElementById("showcase");
const mainCont = document.createElement('div');
showcase.appendChild(mainCont)
let myLibrary = [];

let libBooks = localStorage.getItem('books');

if (libBooks) {
    myLibrary = JSON.parse(libBooks);
  }


btn.addEventListener('click', () => {

   
    const bookObject = {
        title: title.value,
        author: author.value
    }
    myLibrary.push(bookObject)
    localStorage.setItem('books', JSON.stringify(myLibrary));
    addToDom();
    title.value = ''
    author.value = ''
});


const addToDom = () => {
    
    libBooks = localStorage.getItem('books');

    while (mainCont.firstChild) {
        mainCont.removeChild(mainCont.firstChild);
    }
    
    if (libBooks) {
        books = JSON.parse(libBooks).map((book) => {
            const bookCont = document.createElement('div');
            mainCont.appendChild(bookCont);
            const bookTitle = document.createElement('p');
            const bookAuthor = document.createElement('p');
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Delete";
            removeBtn.addEventListener('click', () => {
                bookCont.remove()
                libBooks =  JSON.parse(localStorage.getItem('books'));
                libBooks.forEach((bookStored) => {
                    if (bookStored.title === bookTitle.textContent) {
                        libBooks.splice(libBooks.indexOf(bookStored), 1);
                      localStorage.setItem('books', JSON.stringify(bookStored));
                    }
                  });
            }
            );
            bookCont.appendChild(removeBtn);
            bookCont.appendChild(bookTitle);
            bookCont.appendChild(bookAuthor);
            bookTitle.textContent = book.title,
            bookAuthor.textContent = book.author
        });
      }
};

addToDom();