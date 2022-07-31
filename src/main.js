const books = new Array();
const bookName = document.getElementById("book-name");
const resultBody = document.getElementById("result-body");
// funcation addBook to table
function addBook() {
    if(bookName.value !== "") {
        books.push(bookName.value);
        bookName.value = "";
    }
    refreshResult();
}
// funcation deleteBook the table
function deleteBook(id) {
    if(confirm("آیا قصد حذف کردن این کتاب را دارید")) {
        if(id !== undefined) {
            books[id] = undefined;
        } else {
            let code = bookName.value;
            if(code !== "") {
                books[code - 1] = undefined;
            }
        }
    }
    refreshResult();
}
// function create tr and td in table
function refreshResult() {
    let result = "";
    for (let index = 0; index < books.length; index++) {
        if(books[index] === undefined) {
            bookName.value = "";
            continue;
        }
       result += "<tr><td>" + (index + 1) + "</td><td>" + books[index] + "</td><td><a onclick='deleteBook("+ index +")' class='remove-book'>X</a>"; 
    }
    resultBody.innerHTML = result;
}