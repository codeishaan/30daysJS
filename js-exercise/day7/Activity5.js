//task 9 

const book ={
    title:"the empire",
    Author:"Eogjs",
    Year:"2002",
}

const key = Object.keys(book);
const value = Object.values(book);

console.log(key, value)

//task 8

for(let keyz in book )
{
    console.log(keyz);
    console.log(book[keyz])
}

