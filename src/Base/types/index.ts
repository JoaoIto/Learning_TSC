let helloWorld: string = "Hello World";

console.log(helloWorld);
console.log(typeof helloWorld);

// In node console:

/*
"Hello World"
string
*/

// In object, class and, interface types

// Creating a interface types;
interface User {
    name: string,
    email: string,
    age: number,
    isCoding: boolean
}

// Creating a class and constructor for object
class User {
    name: string;
    email: string;
    age: number;
    isCoding: boolean;

    constructor(name: string, email: string, age: number, isCoding: boolean){
        this.name = name;
        this.email = email;
        this.age = age;
        this.isCoding = isCoding;
    }
}

// Object in example:
const user: User = new User("Joao", "joaovictorpfr@gmail.com", 17, true);

console.log(user);
console.log(typeof user.name, typeof user.age, typeof user.email, typeof user.isCoding)
// Result in console: 

/* 
User {
  name: 'Joao',
  email: 'joaovictorpfr@gmail.com',
  age: 17,
  isCoding: true
}
*/