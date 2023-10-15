function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name, age, pronouns) {
  var ghoulCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return ghoulCharacter;
}

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return
  } 
  else {
    reviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
  return book
}

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}