# [Types](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#defining-types) | Doc in typescript site:

In typescript, a difference for a principal language, typescript, is your ***types***! In ***variable's***, in ***object's***, in ***interface's***!

You can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred automatically (for example, patterns that use dynamic programming). To cover these cases, TypeScript supports an extension of the JavaScript language, which offers places for you to tell TypeScript what the types should be.

- My example:

```ts
let helloWorld = "Hello World";
```

**Whitch the variable type?**

The typescript inferres a type ***string*** in variable in ***"Hello World!"***, that is, typescript understand that variable NEEDS a type, is a differential! That is, we can declares the variable so:

```ts
let helloWorld: string = "Hello World";

console.log(helloWorld);
console.log(typeof helloWorld);

// In node console:

/*
"Hello World"
string
*/
```

## Inferes types, and after a value

You can inferes the type in variable, and after a value, typescript can this!

```ts
let loading: boolean;
loading = false;

let email: string;
email = "joao@email.com";

let price: number;
price = 10.50;
```

---

## Types in ***interface***, ***class***, and ***object***

We can inferres the types in differents paradigams inside the language, for example:

- We have that to construct a User, and he needs have a some information, about(name, age, email, etc). In ***TypeScript*** **we can intercept errors in code when I inferres the types!**

```ts
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
```

- **Result in console:**

```ts
User {
  name: 'Joao',
  email: 'joaovictorpfr@gmail.com',
  age: 17,
  isCoding: true
}
```

And more! If we needs finds the types of information in object user, we can! With types in `console typeof`:

```ts
// Object in example:
const user: User = new User("Joao", "joaovictorpfr@gmail.com", 17, true);

console.log(user);
console.log(typeof user.name, typeof user.age, typeof user.email, typeof user.isCoding)
```

- **Result:**

```ts
string, number, string, boolean
```

---
