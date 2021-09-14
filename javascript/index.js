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
  let author = `Author: ${book.title}`;
  
  let div = createElement('div', 'book-container') 
  let titleTag = createElement('p', 'title');
  titleTag.innerText = title;
  let authorTag = createElement('p', 'author');
  authorTag.innerText = author;
  let removeBtn = createElement('button', 'remove-btn');
  let dataSet = removeBtn.setAttribute('data-name', `${i}`);    
  removeBtn.innerText = 'Remove';
  div.append(titleTag, authorTag, removeBtn);
  bookContainer.append(div);
  i++;
  // console.log(div)

  })
  // console.log(filter);
}
display();

function add(e) {
  let title = document.querySelector('#title').value;
  let author =  document.querySelector('#author').value;
  let object = {title, author};
  books.push(object);
  display();
  clickRemove();
}

function remove(event) {
  console.log('a')
  let eIndex = event.target.dataset.name;
  parseInt('index', 10);
  books.filter((element, index) =>{
    if(eIndex == index) {
      console.log(index);
      books = books.splice(index, index);
      console.log(books);
      display();
    }
  })
}
 

function clickAdd () {
  let button = document.querySelector('.add');
  button.addEventListener('click', add);
}
clickAdd();

function clickRemove() {
  let button = document.querySelector('.remove-btn');
  button.addEventListener('click', remove);    
}
