/******************
* Variables and Data types



console.log("Hello World!!!");
console.log("do it");

console.log("Hello World!!!");
console.log("do it");

var firstName = 'john';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);
 * */

// var 3years = 3;
//you can not start a variable with a number or it may not contain symbols
//or reserved JS key words

/**************
 * Variable mutation and type coercion
 * */

var firstName = 'John';
var age = 28;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);































