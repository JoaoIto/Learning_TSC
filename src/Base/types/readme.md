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

## `Interface` vs `type`

1. Objects / Functions
Both can be used to describe the shape of an object or a function signature. But the syntax differs.

### Interface

```ts
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}
Type alias

type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
```


### 2. Other Types

Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples.

```ts
// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

```

### 3. Extend

Both can be extended, but again, the syntax differs. Additionally, note that an interface and type alias are not mutually exclusive. An interface can extend a type alias, and vice versa.

Interface extends interface

```ts
interface PartialPointX { x: number; }
interface Point extends PartialPointX { y: number; }
Type alias extends type alias

type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };
Interface extends type alias

type PartialPointX = { x: number; };
interface Point extends PartialPointX { y: number; }
Type alias extends interface

interface PartialPointX { x: number; }
type Point = PartialPointX & { y: number; };

```

### 4. Implements

A class can implement an interface or type alias, both in the same exact way. Note however that a class and interface are considered static blueprints. Therefore, they can not implement / extend a type alias that names a union type.

```ts
interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}

type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x = 1;
  y = 2;
}

type PartialPoint = { x: number; } | { y: number; };

// FIXME: can not implement a union type
class SomePartialPoint implements PartialPoint {
  x = 1;
  y = 2;
}

```

### 5. Declaration merging
Unlike a type alias, an interface can be defined multiple times, and will be treated as a single interface (with members of all declarations being merged).

```ts
// These two declarations become:
// interface Point { x: number; y: number; }
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 };
```

---
