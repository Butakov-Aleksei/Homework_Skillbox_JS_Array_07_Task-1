const booksArr = ["Мастер и Маргарита", "Гарри Поттер", "За пропастью во ржи", "Властелин колец", "Дюна", "Отцы и дети"];

function renderList(arr) {
  booksList.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let itemEl = document.createElement('li');
    itemEl.classList.add('home-library__item');
    itemEl.textContent = arr[i];

    booksList.append(itemEl);
  }
  return booksList;
}

const booksList = document.querySelector('.home-library__list');

const btnAddBook = document.getElementById('addBook');
const btnSearchBook = document.getElementById('searchBook');

btnAddBook.onclick = function () {
  let newBook = prompt("Введите название новой книги");

  if (!newBook) {
    alert("Название книги не введено");
    return;
  }

  if (newBook.trim() == "") {
    alert("Название книги не введено");
    return;
  }

  booksArr.push(newBook.trim());
  renderList(booksArr);
}

btnSearchBook.onclick = function () {
  let searchBook = prompt("Введите название новой книги");

  if (!searchBook) {
    alert("Книга не найдена!");
    return;
  }

  if (searchBook.trim() == "") {
    alert("Книга не найдена!");
    return;
  }

  for (let i = 0; i < booksArr.length; i++) {
    if (booksArr[i] === searchBook) {
      let findItem = document.querySelector(`.home-library__item:nth-child(${i + 1})`);
      findItem.classList.add('home-library__item--finded');
    }
  }
}

renderList(booksArr);
