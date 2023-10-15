function shelfBook(book, sciFiShelf) {
  if(sciFiShelf.length < 3) {
    sciFiShelf.unshift(book)
  }
  return
  // console.log("<>>>>>", sciFiShelf);
  // console.log("<>>>>>", sciFiShelf.length);


//   var aplhabetizedShelf = sciFiShelf.sort(function(a, b){
//     var title1 = a.title.toLowerCase();
//     var title2 = b.title.toLowerCase();

//     if (title1 < title2) {
//       return -1;
//     } if (title1 > title2) {
//       return 1;
//     }
//     return 0
//   });
//   return aplhabetizedShelf;
}

function unshelfBook(bookTitle, nonFictionShelf) {
  var findIndex = nonFictionShelf.findIndex(function(book){
    return book.title === bookTitle
  })
  nonFictionShelf.splice(findIndex, 1)
}

function listTitles(fantasyShelf) {
  bookTitles = []
  
  for (i = 0; i < fantasyShelf.length; i++) {
    bookTitles.push(fantasyShelf[i].title)
  }
  return bookTitles.join(", ");
}

function searchShelf(sciFiShelf, title) {
  return sciFiShelf.some(function(book) {
    return book.title === title;
  });
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};