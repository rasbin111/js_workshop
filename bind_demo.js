let user = {
    firstName: "John",
    sayHi(){
        console.log(`Hello, ${this.firstName}`);
    }
};


setTimeout(user.sayHi, 1000); // Output: Hello, undefined

setTimeout(()=>{
    user.sayHi();
}, 1000); // Output: Hello, John

let secondUser = {
    firstName: "John"
}

function printFristName(){
    console.log(this.firstName);
}

let printUserFirstName = printFristName.bind(secondUser);
printUserFirstName(); // Output: John




