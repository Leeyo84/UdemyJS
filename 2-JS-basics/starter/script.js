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
//
// /**************
//  * Variable mutation and type coercion
//  * */
//
// var firstName = 'John';
// var age = 28;
//
// // Type Coercion
// console.log(firstName + ' ' + age);
//
// var job, isMarried;
// job = 'teacher';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// //Variable mutation
// age = 'twenty eight';
// job = 'driver';
//
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/*
*
* Basic Operators
* */

//
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
//
// // math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
//
// console.log(yearJohn);
//
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
//
// // logical operators
//
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);
//
// // typeof operator
// console.log(typeof  johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

// /*********************************
//  * Operator precedence
//  * */
//
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;
//
// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge;// true
// console.log(isFullAge);
//
// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);
//
// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6// 26
// console.log(x, y);
//
// // more operators
// // x = x * 2;
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);


/******************
 * Coding Challenge 1
 * */

// solution
// markHeight = 1.98;
// markMass = 95;
//
// johnHeight = 1.69;
// johnMass = 78;
//
// mark = markHeight, markMass;
//
// john = johnHeight, johnMass;

// johnBMI = johnMass / (johnHeight * johnHeight);
// markBMI = markMass / (markHeight * markHeight);
//
// markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI);
//
// console.log("Is Mark's BMI higher than John's?" + ' ' + markHigherBMI);

// var massMark = 78; // kg
// var heightMark = 1.69; // meters
//
// var massJohn = 92;
// var heightJohn = 1.95;
//
// var BMIMark = massMark/ (heightMark * heightMark);
// var BMIJohn = massJohn/ (heightJohn * heightJohn);
//
// var markHigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


/***********************************
 * If / else statements
 */

// var firstName = 'John';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }
//
// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }
//
// var massMark = 78; // kg
// var heightMark = 1.69; // meters
//
// var massJohn = 92;
// var heightJohn = 1.95;
//
// var BMIMark = massMark/ (heightMark * heightMark);
// var BMIJohn = massJohn/ (heightJohn * heightJohn);
//
// // var markHigherBMI = BMIMark > BMIJohn;
// // console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
//
// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }
//
/***********************************
 * Boolean logic
 * */

var firstName ='John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if () { // Between 13 and 20 = age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}






























