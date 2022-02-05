

const form = document.querySelector('#form')
const formTitle = document.querySelector('#form-title')
const title = document.querySelector('#title')
const pages = document.querySelector('#pages')
const author = document.querySelector('#author')
const read = document.querySelector('#read')
const newButton = document.querySelector('#new-book')
const library = document.querySelector('.library')


const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}



let banner = false;

function submitValidation() {
  if (!banner) {
    banner = true;
    const validateBanner = document.createElement('div')
    const validateText = document.createElement('p')
    const closeBanner = document.createElement('span')
    closeBanner.innerText = "cancel"
    closeBanner.setAttribute('class', 'material-icons-outlined close')
    closeBanner.setAttribute('id', 'close')
    closeBanner.addEventListener('click', (e) => {
      form.removeChild(validateBanner)
      banner = false;
    })
    validateBanner.setAttribute('class', 'valid')
    validateBanner.appendChild(validateText)
    validateText.innerText = "Book added!"
    validateBanner.appendChild(closeBanner)
    form.insertBefore(validateBanner, formTitle)
  }
}


function addBookToLibrary() {
  let bookTitle = title.value
  let bookAuthor = author.value
  let bookRead = read.checked
  let bookPages = pages.value
  let book = new Book(bookTitle, bookAuthor, bookPages, bookRead)
  myLibrary.push(book)
  addBookToPage(book)
  form.reset()
  submitValidation()
}

newButton.addEventListener('click', (e) => {
  form.setAttribute('class', 'after-form')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addBookToLibrary()
})


function addBookToPage(book) {
  let cardTitle = document.createElement('h2')
  let cardAuthor = document.createElement('p')
  let cardPages = document.createElement('p')
  let cardRead = document.createElement('button')
  let card = document.createElement('div')

  const dltBook = document.createElement('span')
  dltBook.innerText = "cancel"
  dltBook.setAttribute('class', 'material-icons-outlined dlt')
  dltBook.setAttribute('id', 'dlt')
  dltBook.addEventListener('click', (e) => {
    let index = e.target.parentElement.id.slice(4)

    library.removeChild(e.target.parentElement)
    myLibrary.splice(index, 1)
  })

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



function toggleRead(e) {
  let index = e.target.parentElement.id.slice(4)
  console.log(index)
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





////////////////////////////////////////////
//////seed page and array/////
const lotr = new Book('LOTR', 'Tolkien', 500, true)
const hpOne = new Book('HarryPotter 1', 'JKR', 300, true)
const hpTwo = new Book('HarryPotter 2', 'JKR', 400, true)
myLibrary.push(lotr)
myLibrary.push(hpOne)
myLibrary.push(hpTwo)

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let cardTitle = document.createElement('h2')
    let cardAuthor = document.createElement('p')
    let cardPages = document.createElement('p')
    let cardRead = document.createElement('button')
    let card = document.createElement('div')



    const dltBook = document.createElement('span')
    dltBook.innerText = "cancel"
    dltBook.setAttribute('class', 'material-icons-outlined dlt')
    dltBook.setAttribute('id', 'dlt')
    dltBook.addEventListener('click', (e) => {
      let index = e.target.parentElement.id.slice(4)

      library.removeChild(e.target.parentElement)
      myLibrary.splice(index, 1)
    })

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