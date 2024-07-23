//task 5 
const Library={
name :"ikc",
books:[
    {
        title:"the way",
        author:"ik"
    },
    {
        title:"on the rocks",
        author:"ag"
    }
]
}

console.log(Library)


//task 6 

console.log(Library.name)
Library.books.forEach(book=>{
    console.log(book.title)})