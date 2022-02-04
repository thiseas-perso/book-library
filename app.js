

const form = document.querySelector('#form')
const formTitle = document.querySelector('#form-title')
const title = document.querySelector('#title')
const pages = document.querySelector('#pages')
const author = document.querySelector('#author')
const read = document.querySelector('#read')
const newButton = document.querySelector('#new-book')


const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${title} by ${author}, ${pages} long, ${read}`
  }
}

function submitValidation() {
  const validateBanner = document.createElement('div')
  const validateText = document.createElement('p')
  const closeBanner = document.createElement('span')
  closeBanner.innerText = "cancel"
  closeBanner.setAttribute('class', 'material-icons-outlined close')
  closeBanner.setAttribute('id', 'close')
  closeBanner.addEventListener('click', (e) => {
    form.removeChild(validateBanner)
  })
  validateBanner.setAttribute('class', 'valid')
  validateBanner.appendChild(validateText)

  validateText.innerText = "Book added!"
  validateBanner.appendChild(closeBanner)

  form.insertBefore(validateBanner, formTitle)
}

function addBookToLibrary() {
  let bookTitle = title.value
  let bookAuthor = author.value
  let bookRead = read.checked
  let bookPages = pages.value
  let book = new Book(bookTitle, bookAuthor, bookPages, bookRead)
  myLibrary.push(book)
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

