# [Enums](https://www.typescriptlang.org/docs/handbook/enums.html#:~:text=Enums%20are%20one%20of%20the%20few%20features%20TypeScript,cases.%20TypeScript%20provides%20both%20numeric%20and%20string-based%20enums.) no TypeScript

Enums are one of the few features that TypeScript has, which is not a JavaScript type-level extension.

Enums* allow a developer to define a set of named constants**. The use of enums **can facilitate the documentation of the intention or create a set of distinct cases**. TypeScript provides string-based and numeric enums.

- **Example:**

```ts
enum Enum {
    A,
    B = 3,
    C,
    D,
    F
}

//Whitch the value for Enum.C?
```

It defines this string each with its default index, and so too, whenever Dev goes there and sets a new index, **it starts counting from the new one!**

- Enum starts from 0, but if we modify**the value of any of the enum,**the next values will count from the new value**.

---
