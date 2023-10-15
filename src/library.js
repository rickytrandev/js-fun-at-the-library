function createLibrary(libraryName){
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library
};

function addBook(library, book) {
  if (book.genre === "fantasy") {
    return library.shelves.fantasy.push(book)
  }
  else if (book.genre === "fiction") {
    return library.shelves.fiction.push(book)
  }
  else if (book.genre === "nonFiction") {
    return library.shelves.nonFiction.push(book)
  }
};

function checkoutBook(library, book, genre) {
  // console.log("<>>>>>>>", library.shelves[genre][0])
  if (library.shelves[genre][0]?.title === book) {
    library.shelves[genre].pop();
    return `You have now checked out ${book} from the ${library.name}.`
    } 
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}.`
} 

function takeStock(library, genre) {
  // console.log("<>>>> LIBRARY", library)
  // console.log("<>>>> GENRE", genre)
  // console.log("<>>>> SHELVES", library.shelves)
  // console.log("<>>>> FANTASY BOOKS", library.shelves[genre])

  if(!genre) {
    var fantasyBooks = library.shelves.fantasy.length;
    var nonFictionBooks = library.shelves.nonFiction.length;
    var fictionBooks = library.shelves.fiction.length;
    var totalNumBooks = fantasyBooks + nonFictionBooks + fictionBooks;

    return `There are a total of ${totalNumBooks} books at the Denver Public Library.`
  }
  
  var numBooks = library.shelves[genre].length
  return `There are a total of ${numBooks} ${genre} books at the ${library.name}.`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};