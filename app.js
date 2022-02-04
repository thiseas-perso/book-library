



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

const lotr = new Book("The Lord of The Rings", "JR Tolkien", 1200, 'not yet')

function addBookToLibrary(book) {
  myLibrary.push(book)
}