class Library{
  constructor(){
    this.books = JSON.parse(localStorage.getItem('books'));
    this.storage = localStorage.setItem('books', JSON.stringify(this.books));
    this.storedBooks = JSON.parse(localStorage.getItem('books'));
  }

  removeBook(event) {
    for (let index = 0; index < library.storedBooks.length; index += 1) {
      if ((event.target.parentElement.children[0].innerText === library.storedBooks[index].title)
        && (event.target.parentElement.children[1].innerText === library.storedBooks[index].author)) {
        library.storedBooks.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(library.storedBooks));
        library.storedBooks = JSON.parse(localStorage.getItem('books'));
        window.location.reload();
      }
    }
  }
  
  renderBooks() {
    for (let i = 0; i < library.storedBooks.length; i += 1) {
      this.p = library.storedBooks[i];
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
      this.removeBtn.addEventListener('click', library.removeBook);
      this.hr = document.createElement('hr');
      this.div.appendChild(this.hr);
    }
  }
  
  checkRender() {
    if (library.storedBooks !== null) {
      this.renderBooks();
    } else {
      library.storedBooks = [];
      library.books = [];
      this.renderBooks();
    }  
  }
  
  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = { title, author };
    library.storedBooks = library.storedBooks.filter((book)=> {
      return book.title !== title || book.author !== author;
    })
    library.storedBooks.push(book);
    library.books.push(book);
    console.log(title);
    console.log(library.storedBooks);
    localStorage.setItem('books', JSON.stringify(library.storedBooks));
    library.storedBooks = JSON.parse(localStorage.getItem('books'));
    window.location.reload();
  }
  addEvent(){
    document.getElementById('btn').addEventListener('click', library.addBook);
  }
}

const library = new Library();
library.addEvent;
library.checkRender();
library.addEvent();
