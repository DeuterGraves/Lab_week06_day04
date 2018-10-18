document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener("submit", handleForm);

})


const handleForm= function(event){
  event.preventDefault();

  const titleResult = document.querySelector('#title-result');
  titleResult.textContent = `The Title is: ${this.title.value}`;
  const authorResult = document.querySelector('#author-result');
  authorResult.textContent = `The Author is: ${this.author.value}`;
  const categoryResult = document.querySelector('#category-result');
  categoryResult.textContent = `The Category is: ${this.category.value}`;

  const newBookDiv = document.createElement('div');
  newBookDiv.textContent = "Book"

  const newULforDetails = document.createElement('ul');
  const newTitleResult = document.createElement('li');
  newTitleResult.textContent = `The Title is: ${this.title.value}`;
  const newAuthorResult = document.createElement('li');
  newAuthorResult.textContent = `The Author is: ${this.author.value}`;

  const bookList = document.querySelector('div')
  bookList.appendChild(newULforDetails);


  // console.log(this.title.value);
  // console.log(this.author.value);
  // console.log(this.category.value);
  const list = document.querySelector("book-list")
}
