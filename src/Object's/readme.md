# Object's 

In TypeScript, just like in JavaScript, an object contains a set of keys and values. Objects are used to group and pass data to functions. In TypeScript, we represent those objects, with object types, usually interfaces or types.

Here is an example of an object with its corresponding TypeScript object type definition.

```ts
interface IArticle {
    date: number;
    content: string;
}

const article: IArticle = {
    content: 'new content',
    date: Date.now(),
};
```

---