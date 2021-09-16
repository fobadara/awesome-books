class Library {
  constructor() {
   
  }

  variables () {
    this.books = JSON.parse(localStorage.getItem('books'));
    console.log(this.books)
    this.storage = localStorage.setItem('books', JSON.stringify(this.books));
    this.storedBooks = JSON.parse(localStorage.getItem('books'));
  }

  removeBook = (event) => {
    for (let index = 0; index < this.storedBooks.length; index += 1) {
      if ((event.target.parentElement.children[0].innerText === this.storedBooks[index].title)
        && (event.target.parentElement.children[1].innerText === this.storedBooks[index].author)) {
        this.storedBooks.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(this.storedBooks));
        this.storedBooks = JSON.parse(localStorage.getItem('books'));
        window.location.reload();
      }
    }
  }

  renderBooks() {
    this.variables();
    for (let i = 0; i < this.storedBooks.length; i += 1) {
      this.p = this.storedBooks[i];
      this.div = document.createElement('div');
      this.div.className = i;
      this.para1 = document.createElement('p');
      this.para1.innerHTML = this.p.title;
      this.div.appendChild(this.para1);
      this.para2 = document.createElement('p');
      this.para2.innerHTML = this.p.author;
      this.div.appendChild(this.para2);
      this.container = document.getElementById('container');
      this.container.appendChild(this.div);
      this.removeBtn = document.createElement('button');
      this.removeBtn.id = i;
      this.removeBtn.innerText = 'Remove';
      this.div.appendChild(this.removeBtn);
      this.removeBtn.addEventListener('click', this.removeBook);
      this.hr = document.createElement('hr');
      this.div.appendChild(this.hr);
    }
  }

  checkRender() {
    if (this.storedBooks !== null) {
      this.renderBooks();
    } else {
      this.storedBooks = [];
      this.books = [];
      this.renderBooks();
    }
  }

  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = { title, author };
    this.storedBooks = this.storedBooks.filter((book) => book.title !== title || book.author !== author);
    this.storedBooks.push(book);
    this.books.push(book);
    console.log(title);
    console.log(this.storedBooks);
    localStorage.setItem('books', JSON.stringify(this.storedBooks));
    this.storedBooks = JSON.parse(localStorage.getItem('books'));
    window.location.reload();
  }

  addEvent() {
    document.getElementById('btn').addEventListener('click', this.addBook);
  }
}

const library = new Library();
library.addEvent();
library.checkRender();
library.variables();