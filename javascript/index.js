function Library() {
  this.books = JSON.parse(localStorage.getItem('books'));
  this.storage = localStorage.setItem('books', JSON.stringify(this.books));
  this.storedBooks = JSON.parse(localStorage.getItem('books'));
}
const library = new Library();

function RemoveBook() {
  for (let index = 0; index < library.storedBooks.length; index += 1) {
    if ((this.parentElement.children[0].innerText === library.storedBooks[index].title)
      && (this.parentElement.children[1].innerText === library.storedBooks[index].author)) {
      library.storedBooks.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(library.storedBooks));
      library.storedBooks = JSON.parse(localStorage.getItem('books'));
      window.location.reload();
    }
  }
}
const remove = new RemoveBook();

function RenderBooks() {
  for (let i = 0; i < library.storedBooks.length; i += 1) {
    this.p = library.storedBooks[i];
    this.div = document.createElement('div');
    this.div.className = i;
    this.para1 = document.createElement('p');
    para1.innerHTML = this.p.title;
    div.appendChild(para1);
    this.para2 = document.createElement('p');
    para2.innerHTML = this.p.author;
    div.appendChild(para2);
    this.container = document.getElementById('container');
    this.container.appendChild(div);
    this.removeBtn = document.createElement('button');
    this.removeBtn.id = i;
    this.removeBtn.innerText = 'Remove';
    this.div.appendChild(removeBtn);
    this.removeBtn.addEventListener('click', this.removeBook);
    this.hr = document.createElement('hr');
    this.div.appendChild(hr);
  }
}

function CheckRender() {
  if (library.storedBooks !== null) {
    const render = new RenderBooks();
  } else {
    library.storedBooks = [];
    books = [];
    const render = new RenderBooks();
  }  
}

// function addBook() {
//   const title = document.getElementById('title').value;
//   const author = document.getElementById('author').value;
//   const book = { title, author };
//   library.storedBooks = library.storedBooks.filter((book)=> {
//     return book.title !== title || book.author !== author;
//   })
//   library.storedBooks.push(book);
//   books.push(book);
//   console.log(title);
//   console.log(library.storedBooks);
//   localStorage.setItem('books', JSON.stringify(library.storedBooks));
//   library.storedBooks = JSON.parse(localStorage.getItem('books'));
//   window.location.reload();
//   document.getElementById('title').value = '';
//   document.getElementById('author').value = '';
// }
// document.getElementById('btn').addEventListener('click', addBook);

// }
