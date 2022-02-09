const form = document.querySelector('#form')
const formTitle = document.querySelector('#form-title')
const title = document.querySelector('#title')
const pages = document.querySelector('#pages')
const author = document.querySelector('#author')
const read = document.querySelector('#read')
const newButton = document.querySelector('#new-book')
const library = document.querySelector('.library')

let banner = false;
const myLibrary = [];

class Book {

  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

  }
}


function submitValidation() {
  if (!banner) {
    banner = true;
    const validateBanner = document.createElement('div')
    const validateText = document.createElement('p')
    const closeBtn = document.createElement('span')
    createDlt(closeBtn, form, validateBanner)
    validateBanner.setAttribute('class', 'valid')
    validateText.innerText = "Book added!"
    validateBanner.appendChild(validateText)
    validateBanner.appendChild(closeBtn)
    form.insertBefore(validateBanner, formTitle)
  }
}


function createDlt(btn, parent, container) {
  btn.innerText = "cancel"
  btn.setAttribute('class', 'material-icons-outlined close')
  btn.setAttribute('id', 'close')
  btn.addEventListener('click', (e) => {
    parent.removeChild(container)
    banner = false;
  })
}


function addBookToLibrary() {
  const bookTitle = title.value
  const bookAuthor = author.value
  const bookRead = read.checked
  const bookPages = pages.value
  const book = new Book(bookTitle, bookAuthor, bookPages, bookRead)
  book.id = `book${myLibrary.length}`
  myLibrary.push(book)
  addBookToPage(book)
  form.reset()
  submitValidation()
}


function addBookToPage(book) {
  const cardTitle = document.createElement('h2')
  const cardAuthor = document.createElement('p')
  const cardPages = document.createElement('p')
  const cardRead = document.createElement('button')
  const card = document.createElement('div')
  const dltBook = document.createElement('span')
  dltBookBtn(dltBook)

  if (book.read) {
    cardRead.setAttribute('id', 'btn-read')
    cardRead.innerText = 'read'
  } else {
    cardRead.setAttribute('id', 'btn-not-read')
    cardRead.innerText = 'not read'
  }

  cardRead.addEventListener('click', toggleRead)
  card.setAttribute('class', 'card')
  card.setAttribute('id', `book${myLibrary.length - 1}`)
  cardTitle.innerText = `${book.title}`
  cardAuthor.innerText = `${book.author}`
  cardPages.innerText = `${book.pages} pages`
  card.appendChild(cardTitle)
  card.appendChild(dltBook)
  card.appendChild(cardAuthor)
  card.appendChild(cardPages)
  card.appendChild(cardRead)
  library.appendChild(card)
}

function dltBookBtn(dltBtn) {
  dltBtn.innerText = "cancel"
  dltBtn.setAttribute('class', 'material-icons-outlined dlt')
  dltBtn.setAttribute('id', 'dlt')
  dltBtn.addEventListener('click', dltFromLibrary)
}

function dltFromLibrary(e) {
  library.removeChild(e.target.parentElement)
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id === e.target.parentElement.id) {
      myLibrary.splice(i, 1)
    }
  }
}


function toggleRead(e) {
  let index = e.target.parentElement.id.slice(4)

  if (myLibrary[index].read) {
    myLibrary[index].read = false
    e.target.id = "btn-not-read"
    e.target.innerText = "not read yet"
  } else {
    myLibrary[index].read = true
    e.target.id = "btn-read"
    e.target.innerText = "read"
  }
}



newButton.addEventListener('click', (e) => {
  form.setAttribute('class', 'after-form')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addBookToLibrary()
})










////////////////////////////////////////////
//////seed page and array/////

function seed() {
  const lotr = new Book('LOTR', 'Tolkien', 500, true)
  const hpOne = new Book('HarryPotter 1', 'JKR', 300, true)
  const hpTwo = new Book('HarryPotter 2', 'JKR', 400, true)
  const seedArr = [lotr, hpOne, hpTwo]
  for (let i = 0; i < seedArr.length; i++) {
    seedArr[i].id = `book${myLibrary.length}`
    myLibrary.push(seedArr[i])
  }
}

seed()


function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const cardTitle = document.createElement('h2')
    const cardAuthor = document.createElement('p')
    const cardPages = document.createElement('p')
    const cardRead = document.createElement('button')
    const card = document.createElement('div')

    const dltBook = document.createElement('span')
    dltBookBtn(dltBook)

    card.setAttribute('class', 'card')
    card.setAttribute('id', `book${i}`)
    cardTitle.innerText = `${myLibrary[i].title}`
    cardAuthor.innerText = `${myLibrary[i].author}`
    cardPages.innerText = `${myLibrary[i].pages} pages`

    if (myLibrary[i].read) {
      cardRead.setAttribute('id', 'btn-read')
      cardRead.innerText = 'read'
    } else {
      cardRead.setAttribute('id', 'btn-not-read')
      cardRead.innerText = 'not read'
    }
    cardRead.addEventListener('click', toggleRead)

    card.appendChild(cardTitle)
    card.appendChild(dltBook)
    card.appendChild(cardAuthor)
    card.appendChild(cardPages)
    card.appendChild(cardRead)
    library.appendChild(card)
  }
}

displayBooks()
///////////