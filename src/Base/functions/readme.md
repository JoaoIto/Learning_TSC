# functions

Functions in TSC, different in JS, can inferres a types in arguments or in a return after declares her.

```js

function sum(a, b){
    return a + b;
}
```

This function is correct, rigth? But not a types, you can inferres diferent types and can undestand not errors.

TSC helps in her, example:

```ts
/** A function for understand a types in function
 * 
 * @param a 
 * @param b 
 * @returns a + b;
 */

function sum(a: number, b: number): number {
    return a + b;
}
```

---