// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

const books = [
    { title: 'Book One', author: "deep", genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', author: "kunal", genre: 'Non-Fiction', publish: 2010, edition: 2008 },
    { title: 'Book Three', author: "Rohit", genre: 'History', publish: 2015, edition: 2017 },
    { title: 'Book Four', author: "raj", genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', author: "tom", genre: 'Science', publish: 2012, edition: 2014 },
    { title: 'Book Six', author: "tim", genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', author: "trump", genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', author: "modi", genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', author: "putin", genre: 'Non-Fiction', publish: 2010, edition: 2020 },
];

function FilteredBooks(books) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].publish >= 2010 ) {
            books[i].author = books[i].author.charAt(0).toUpperCase() + books[i].author.slice(1);
            console.log(books[i].author + " " + books[i].publish );
        }
    }
}
    

const filteredBooks = FilteredBooks(books);
console.log(filteredBooks);
