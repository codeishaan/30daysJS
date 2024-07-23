const books ={
    Title :"Ansdn",
    Author: "fjir",
    Year: "10",
    years : function(yr){
     this.Year = yr;
    },

    getSummary: function(){
        return `${this.Title}, ${this.Author}`;
    }
           
};
//task 3
const BookAuthor = books.getSummary();
console.log(BookAuthor)

//task 4 
books.years(22);
console.log(books.Year)

 

