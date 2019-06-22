console.log("hello hw6-12");

//I. Variables & Datatypes
//A. Q + A
//1. declare the variable and then assign to a value. (let a = 1, const a = 1, var a = 1)
//2. re-assign a value to the same declared mutable variable.(let a = 1; a = 2; )
//3. declare the variable first and then assign the varible to the new same declared varible. 
//	 eg: let a = 1; let b = a;
//4. declaer is the varible type, assign: give a value or name to the variable,
// 	 define: to make sure the variable can be applyed;
//5. it's like a blueprint, or a sketch drawing, to help you understand each step of your coding.
//6. 70% of time thinking and 30% actually typing.

//B. Strings
//1. Create a variable called firstVariable
 
// let firstVariable = "Hello World";
// let secondVariable = firstVariable;
// secondVariable = "Have a Good Day";
// "Hello World"

// 2. 
// const yourName = "Michael";
// const greeting = "Hello, My name is ";
// const both = greeting + yourName;
// //console.log(both);

// //C. Booleans
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
//   console.log(a === a != d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');

//E. Driver's Ed

// let age = 2;
// if (age >= 16) {
// 	console.log("Here are the keys!")
// }else {
// 	console.log("Sorry, you're too young.");
// };

//II. Loops
//A. The basics
// for (let i = 0 ; i <= 10; i++) {
// 	console.log(i);
// };

// for (let i = 10 ; i <= 400; i++) {
// 	console.log(i);
// };

// for (let i = 11; i < 4000; i++) {
// 	 i += 2;
// 	 console.log(i);
// }
//B. Get even
//1.
// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// };
//2.

// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 === 0) {
// 		console.log(`${i}<-- is an even number`);
// 	} else {
// 		console.log(i);
// 	}
// };

//C. Give me Five
//1. && 2.
for (let i = 1; i<=100; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(`I found a ${i}. High five! Three is a crowd`)
	} else if (i % 5 === 0) {
		console.log(`I found a ${i}. High five!`);
	} else if ( i % 3 === 0) {
		console.log(`I dound a ${i}. Three is a crowd`);
	}
};




























