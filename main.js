

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addToLib() {
    const bookStored = new Book(this.title, this.author);
    if (this.length !== 0) {
      this.push(bookStored);
    }
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeLibBook() {
    myLibrary.splice(myLibrary.indexOf(bookStored), 1); // eslint-disable-line
    libBooks.splice(libBooks.indexOf(bookStored), 1); // eslint-disable-line
    window.location.reload();
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}


// navigation bar
const navbardiv = document.getElementById("navbardiv")
const navbar = document.createElement("div");
navbardiv.appendChild(navbar);
const logo = document.createElement("div");
const navitems = document.createElement("div")
navbar.appendChild(logo)
navbar.appendChild(navitems)
const logotitle = document.createElement("h1")
logotitle.innerText = "Awesome Books"
logo.appendChild(logotitle)
const listofbooks = document.createElement("h5")
const addnewbook = document.createElement("h5")
const contact = document.createElement("h5")
navitems.appendChild(listofbooks)
navitems.appendChild(addnewbook)
navitems.appendChild(contact)
listofbooks.innerText = "List"
addnewbook.innerText = "Add new"
contact.innerText = "Contact"
logotitle.classList.add("logotitleclass")
navbar.classList.add("navbarclass1")
navitems.classList.add("navitemsclass1")
listofbooks.classList.add("navitemclass")
addnewbook.classList.add("navitemclass")
contact.classList.add("navitemclass")



// navigation events
const list = document.querySelector(".table")
const mainheading = document.querySelector(".mainheading")
  const addnewbookform = document.querySelector(".addnewbookform")
  const contactdiv = document.querySelector(".contactdiv")
  const wau = document.getElementById("image");
addnewbook.addEventListener("click",() => {
  
  list.classList.add("d-none");
  addnewbookform.classList.remove("d-none")
  mainheading.classList.add("d-none")
  contactdiv.classList.add("d-none");

})

listofbooks.addEventListener("click",() => {
  
  list.classList.remove("d-none");

  addnewbookform.classList.add("d-none")
  contactdiv.classList.add("d-none");
  })

contact.addEventListener("click",() => {
  
  list.classList.add("d-none");
  addnewbookform.classList.add("d-none");
  contactdiv.classList.remove("d-none");
  mainheading.classList.add("d-none")
  
})

const DateTime = luxon.DateTime;
const showDT = document.getElementById("show-date");
const localTime = DateTime.now();


showDT.textContent = localTime.toLocaleString(DateTime.DATETIME_FULL);


//main content

const title = document.getElementById('title_input');
const author = document.getElementById('author_input');
const btn = document.getElementById('submit_btn');
const showcase = document.getElementById('showcase');
const mainCont = document.createElement('tbody');
showcase.appendChild(mainCont);
let myLibrary = [];


let libBooks = localStorage.getItem('books');

if (libBooks) {
  myLibrary = JSON.parse(libBooks);
}
if (Book.length === 0) {
  myLibrary = JSON.parse(libBooks);
}

btn.addEventListener('click', () => {
  const bookObject = {
    title: title.value,
    author: author.value,
  };
  myLibrary.push(bookObject);
  localStorage.setItem('books', JSON.stringify(myLibrary));
  addToDom(); // eslint-disable-line no-use-before-define
  title.value = '';
  author.value = '';
  const cong = document.getElementById("cong");
 cong.classList.add("text-center", "text-primary")
  cong.innerText = "Congratulation,your book have been added to the Library!!"
    wau.classList.remove("d-none");


});

const addToDom = () => {
  libBooks = localStorage.getItem('books');

  while (mainCont.firstChild) {
    mainCont.removeChild(mainCont.firstChild);
  }

  if (libBooks) {
    // eslint-disable-next-line no-undef, array-callback-return
    books = JSON.parse(libBooks).map((book) => {
      const bookCont = document.createElement('tr');
      mainCont.appendChild(bookCont);
      const bookTitle = document.createElement('td');
      const bookAuthor = document.createElement('td');
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
      bookTitle.textContent = book.title;
      bookAuthor.textContent = book.author;
    });
  }
};

addToDom();