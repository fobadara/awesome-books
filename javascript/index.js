let books = JSON.parse(localStorage.getItem('books'));
localStorage.setItem('books', JSON.stringify(books));
let storedBooks = JSON.parse(localStorage.getItem('books'));

function removeBook() {
  storedBooks = JSON.parse(localStorage.getItem('books'));
  for (let index = 0; index < storedBooks.length; index += 1) {
    if ((this.parentElement.children[0].innerText === storedBooks[index].title)
      && this.parentElement.children[1].innerText === storedBooks[index].author)) {
      storedBooks.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(storedBooks));
      storedBooks = JSON.parse(localStorage.getItem('books'));
      window.location.reload();
    }
  }
}

function renderBooks() {
  for (let i = 0; i < storedBooks.length; i += 1) {
    const p = storedBooks[i];
    const div = document.createElement('div');
    div.className = i;
    const para1 = document.createElement('p');
    para1.innerHTML = p.title;
    div.appendChild(para1);
    const para2 = document.createElement('p');
    para2.innerHTML = p.author;
    div.appendChild(para2);
    const container = document.getElementById('container');
    container.appendChild(div);
    const removeBtn = document.createElement('button');
    removeBtn.id = i;
    removeBtn.innerText = 'Remove';
    div.appendChild(removeBtn);
    removeBtn.addEventListener('click', removeBook);
    const hr = document.createElement('hr');
    div.appendChild(hr);
  }
}

if (storedBooks !== null) {
  renderBooks();
} else {
  storedBooks = [];
  books = [];
  renderBooks();
}

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = { title, author };
  storedBooks.push(book);
  books.push(book);
  localStorage.setItem('books', JSON.stringify(storedBooks));
  storedBooks = JSON.parse(localStorage.getItem('books'));
  window.location.reload();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}
document.getElementById('btn').addEventListener('click', addBook);
           console.log(storedBooks);
        }
        
   
