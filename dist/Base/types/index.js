var helloWorld = "Hello World";
console.log(helloWorld);
console.log(typeof helloWorld);
// Creating a class and constructor for object
var User = /** @class */ (function () {
    function User(name, email, age, isCoding) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.isCoding = isCoding;
    }
    return User;
}());
// Object in example:
var user = new User("Joao", "joaovictorpfr@gmail.com", 17, true);
console.log(user);
console.log(typeof user.name, typeof user.age, typeof user.email, typeof user.isCoding);
// Result in console: 
/*
User {
  name: 'Joao',
  email: 'joaovictorpfr@gmail.com',
  age: 17,
  isCoding: true
}
*/ 
