//enhanced object literals 

// task 8 
const propName = 'age';

const person = {
    name: 'John',
    [propName]: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    updateAge(newAge) {
        this.age = newAge;
    },
    info() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

console.log(person);  
