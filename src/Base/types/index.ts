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

// Tests (doesnt needs! doesnt needs in typescript!):

describe('User', () => {
  it('should create a new user instance with correct properties', () => {
    const user: User = new User("Joao", "joaovictorpfr@gmail.com", 17, true);

    expect(user).toBeDefined();
    expect(user.name).toEqual('Joao');
    expect(user.email).toEqual('joaovictorpfr@gmail.com');
    expect(user.age).toEqual(17);
    expect(user.isCoding).toBeTruthy();
  });

  it('should ensure property types match', () => {
    const user: User = new User("Joao", "joaovictorpfr@gmail.com", 17, true);

    expect(typeof user.name).toBe('string');
    expect(typeof user.age).toBe('number');
    expect(typeof user.email).toBe('string');
    expect(typeof user.isCoding).toBe('boolean');
  });
});



function expect(name: string) {
    throw new Error("Function not implemented.");
}
// Result in console: 

/* 
User {
  name: 'Joao',
  email: 'joaovictorpfr@gmail.com',
  age: 17,
  isCoding: true
}
*/