# Base for TypeScript

***TypeScript* is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.**


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




