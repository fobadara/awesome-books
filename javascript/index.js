let books = [];

function createElement(element, attribute) {
  let tag = document.createElement(element);
  if(attribute) {
    tag.classList.add('attribute');
  }
  return tag;
}

function display() {
  let bookContainer = document.querySelector('.books');
  let i = 0;
  books.filter((book)=>{
  let title = `Title: ${book.title}`;
  let author = `Author: ${book.author}`;
  
  let div = createElement('div', 'book-container') 
  let titleTag = createElement('p', 'title');
  titleTag.innerText = title;
  let authorTag = createElement('p', 'author');
  authorTag.innerText = author;
  let removeBtn = createElement('button', 'remove-btn');
  removeBtn.innerText = 'Remove';
  let dataSet = removeBtn.setAttribute('data-name', `${i}`);    
  div.append(titleTag, authorTag, removeBtn);
  removeBtn.onclick = remove;
  bookContainer.append(div);
  i++;
})
  // console.log(div)
}

function add() {
  let title = document.querySelector('#title').value;
  let author =  document.querySelector('#author').value;
  let object = {title, author};
  // console.log(object);
  books.push(object);
  display();
  // console.log(object)
}

function remove(event) {
  let eIndex = event.target.dataset.name;
  parseInt('index', 10);
  books.filter((element, index) =>{
    if(eIndex == index) {
      books = books.splice(index, index);
      display();
    }
  })
} 

function queryAddBtn () {
  let button = document.querySelector('button');
  button.addEventListener('click', add);
}
queryAddBtn();

