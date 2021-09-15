let books = JSON.parse(localStorage.getItem("books"))
localStorage.setItem("books", JSON.stringify(books))
var storedBooks = JSON.parse(localStorage.getItem("books"))


function renderBooks () {
    for (let i = 0; i < storedBooks.length; i++) {
        const p = storedBooks[i];
        const div = document.createElement("div")
        div.className = i
        const para1 = document.createElement("p")
        para1.innerHTML = p.title
        div.appendChild(para1)
        const para2 = document.createElement("p")
        para2.innerHTML = p.author
        div.appendChild(para2)
        const container = document.getElementById("container")
        container.appendChild(div)
        const removeBtn = document.createElement("button")
        removeBtn.id = i
        removeBtn.innerText = "Remove"
        div.appendChild(removeBtn)
        removeBtn.addEventListener('click', removeBook);
        const hr = document.createElement("hr")
        div.appendChild(hr)
    }
}

if (storedBooks !== null ) {
    renderBooks()  
} else {
    storedBooks = []
    books = []
    renderBooks()
}



