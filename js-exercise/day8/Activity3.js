//spread and rest operator 

//task 5 

let arr1 = [1,3,5,6,7];
let arr2=[...arr1,75,777,34]
console.log(arr2)

//task 6 

function sum (...numbers){
return numbers.reduce((acc,num)=>acc+num , 0)
}
console.log(sum(1,2,4,5))