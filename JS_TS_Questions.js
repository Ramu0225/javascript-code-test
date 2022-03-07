//what are mixins in JS & TS?
//what are modules in JS & TS?
//what is clousure in JS?

//What are the possible ways to create objects in JavaScript?
// ES6 introduces class feature to create the objects

// class Person {
//    constructor(name) {
//       this.name = name;
//    }
// }
// var object = new Person("Sudheer");

// Singleton pattern:

// A Singleton is an object which can only be instantiated one time.
//Repeated calls to its constructor return the same instance and this way
// one can ensure that they don't accidentally create multiple instances.

// var object = new function(){
//    this.name = "Sudheer";
// }

// what is prototype chain?
//Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based langguage.

//what is JSON and its common operations?
//JSon is a text based data format following javascript object syntax.  it is useful when you want to transmit data across a network and it is atext file with .json extension.

//parsing :converting a string to a native object:  JSON.parse(text)
//stringification: converting a native object to a string so it can be transmitted across the network
// JSON.stringify(object)

// Why do you need a promise?
// Promises are used to handle asynchronous operations.
//They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.
//three state:1.pending 2. fulfilled 3. rejected

//