let books = JSON.parse(localStorage.getItem('books'));
localStorage.setItem('books', JSON.stringify(books));
let storedBooks = JSON.parse(localStorage.getItem('books'));

class Library {
  removeBook = (event) => {
    for (let index = 0; index < storedBooks.length; index += 1) {
      if (event.target.id === `${index}`) {
        storedBooks.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(storedBooks));
        storedBooks = JSON.parse(localStorage.getItem('books'));
        window.location.reload();
      }
    }
  }

  renderBooks() {
    for (let i = 0; i < storedBooks.length; i += 1) {
      // Create elements
      this.fragment = new DocumentFragment();
      this.p = storedBooks[i];
      this.ul = document.createElement('ul');
      this.content = document.createElement('li');
      this.span = document.createElement('span')
      this.span.innerHTML = `${i + 1}. "${this.p.title}" by "${this.p.author}"`
      this.removeBtn = document.createElement('button');
      this.removeBtn.id = i;
      this.removeBtn.classList.add('remove-btn')
      this.removeBtn.innerText = 'Remove';   
      // RemoveBtn event listener
      this.removeBtn.addEventListener('click', this.removeBook);                                                                                                                                                   
      // Style element
      this.ul.style.cssText = "border-bottom: solid rgb(209, 209, 207);"
      this.removeBtn.style.cssText = 
        "margin-bottom: 0.5em; padding:0.3em; border: solid thin rgba(216, 72, 72, 0.2); border-radius: 0.5em;"
      // Append elements
      this.content.appendChild(this.span); 
      this.ul.append(this.content, this.removeBtn);
      this.fragment.append(this.ul);
      this.mainContainer = document.querySelector('.main-container');
      this.mainContainer.appendChild(this.fragment);
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
    if(!title || !author) {
      this.error = document.querySelector('.error');
      this.error.innerText = 'Empty field not allowed';
      this.error.style.cssText = 'color: red; margin-top: 0.5em';
    }
    else{
      storedBooks = storedBooks.filter((book) => book.title !== title || book.author !== author);
      storedBooks.push(book);
      books.push(book);
      localStorage.setItem('books', JSON.stringify(storedBooks));
      storedBooks = JSON.parse(localStorage.getItem('books'));
      window.location.reload();
    }  
  }

  addEvent() {
    document.getElementById('btn').addEventListener('click', this.addBook);
  }
}

const library = new Library();
library.addEvent();
library.checkRender();
