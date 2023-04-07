# TypeScript <img height="40" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg">

A repository to learn a superset for language JavaScript, in types, feactures and new functions, a **TypeScript**!

- Base: Folder for understand the base paradigam, variables, and a way for learn how to program a base in typescript

- Errors: For undestand a prevent errors that typescript recept in console and helps de devs in world to prevent errors in dev ambient!

- Interface: An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

- Object's: A way for understand how objects to comport in superset.

---


## What is TypeScript?

### JavaScript and More

TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

### A Result You Can Trust

TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.

### Safety at Scale

TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

---

## [How to install:](https://www.typescriptlang.org/download)

### TypeScript in Your Project

- Use:

```
npm install typescript --save-dev
```

All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:

```
npx tsc
```

---

## [How to use](https://www.youtube.com/watch?v=aTf8QTjw4RE&t=1646s&ab_channel=Rocketseat)

I use video of Rocketseat for build a project base TypeScript.

- Install a base ``package.json`` with:

```
npm init -y
```

- [Install sucrase](https://github.com/alangpierce/sucrase):

A package for build and compiling fast a files ts, for js, a compiling node!

```
npm install -D sucrase
```

- Add script dev and build in ``package.json``:

```json
"scripts": {
    "dev": "nodemon src/index.ts",
    "build": "sucrase ./src -d ./dist --transforms typescript, imports",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

This command, **your project can be used and compiling typescript!**

But we use a **[nodemon](https://github.com/remy/nodemon)**.

---
***nodemon*** is a tool **that helps develop Node.js based applications by automatically restarting the node application when file changes** in the directory are detected.

## With watch in nodemon

- Install:

```
npm install --save-dev nodemon
```

- Condig file ``nodemon.json``:

```json
{
    "watch": ["src"],
    "ext": "ts",
    "execMap": {
        "ts": "sucrase-node src/index.ts"
    }
}

```

**Now, you can start, test and run build in ***--watch*** with nodemon**, so you can dev and test your files typescript! Have fun! ;)

```
npm run build
```

```
npm run dev
```

---
