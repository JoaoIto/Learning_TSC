# ``Errors in typescript``

For undestand a prevent errors that typescript recept in console and helps de devs in world to prevent errors in dev ambient!

TypeScript helps a dev for prevent errors, for example, when have a function with some arguments, a fist error consider for TypeScript, **is a called funcion with arguments, in calleds with no arguments...**

- **Example:**

```ts
function sum(a: number, b: number){
    return a + b;
}

sum(2, 5);

// Returns in console:

/* 
sum = 7
*/
```

**With no arguments in function:**

```ts
Error in console:
Expected 2 arguments, but got 0.ts(2554)
index.ts(1, 14): An argument for 'a' was not provided.
function sum(a: number, b: number): number
```

**With a differents types in argument**

```ts
Argument of type 'string' is not assignable to parameter of type 'number'.
```
i.e. in the typescript, prevent this errors in console for types and errors for arguments in called function. Prevent in dev ambient!

---