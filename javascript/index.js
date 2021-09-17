let books = JSON.parse(localStorage.getItem('books'));
localStorage.setItem('books', JSON.stringify(books));
let storedBooks = JSON.parse(localStorage.getItem('books'));

class Library {
  removeBook = (event) => {
    for (let index = 0; index < storedBooks.length; index += 1) {
      if ((event.target.parentElement.children[0].innerText === storedBooks[index].title)
        && (event.target.parentElement.children[1].innerText === storedBooks[index].author)) {
        storedBooks.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(storedBooks));
        storedBooks = JSON.parse(localStorage.getItem('books'));
        window.location.reload();
      }
    }
  }

  renderBooks() {
    for (let i = 0; i < storedBooks.length; i += 1) {
      this.p = storedBooks[i];
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
    if (storedBooks !== null) {
      this.renderBooks();
    } else {
      storedBooks = [];
      books = [];
      this.renderBooks();
    }
  }

  addBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = { title, author };
    storedBooks = storedBooks.filter((book) => book.title !== title || book.author !== author);
    storedBooks.push(book);
    books.push(book);
    localStorage.setItem('books', JSON.stringify(storedBooks));
    storedBooks = JSON.parse(localStorage.getItem('books'));
    window.location.reload();
  }

  addEvent() {
    document.getElementById('btn').addEventListener('click', this.addBook);
  }
}

const library = new Library();
library.addEvent();
library.checkRender();
