//task 7 

let number =[1,2,3,4,5,6,7,8];
let doubled = number.map(num=>
    num*2)

console.log(doubled);

//task 8 

let evenNum= number.filter(num=>num%2==0)
console.log(evenNum);

//task 9 

let sum = number.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0);

console.log(sum)