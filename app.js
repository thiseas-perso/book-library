

const form = document.querySelector('#form')
const title = document.querySelector('#title')
const pages = document.querySelector('#pages')
const author = document.querySelector('#author')
const read = document.querySelector('#read')


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



function addBookToLibrary() {
  let bookTitle = title.value
  let bookAuthor = author.value
  let bookRead = read.checked
  let book = new Book(bookTitle, bookAuthor, bookPages, bookRead)
  myLibrary.push(book)
}



form.addEventListener('submit', (e) => {
  e.preventDefault()
  addBookToLibrary()
})

