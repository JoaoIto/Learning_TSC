# [Types](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#defining-types) Doc in typescript site:

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

---
