console.log("hello hw6-12");

// //I. Variables & Datatypes
// //A. Q + A
// //1. declare the variable and then assign to a value. (let a = 1, const a = 1, var a = 1)
// //2. re-assign a value to the same declared mutable variable.(let a = 1; a = 2; )
// //3. declare the variable first and then assign the varible to the new same declared varible. 
// //	 eg: let a = 1; let b = a;
// //4. declaer is the varible type, assign: give a value or name to the variable,
// // 	 define: to make sure the variable can be applyed;
// //5. it's like a blueprint, or a sketch drawing, to help you understand each step of your coding.
// //6. 70% of time thinking and 30% actually typing.

// //B. Strings
// //1. Create a variable called firstVariable
 
// // let firstVariable = "Hello World";
// // let secondVariable = firstVariable;
// // secondVariable = "Have a Good Day";
// // "Hello World"

// // 2. 
const yourName = "Michael";
const greeting = "Hello, My name is ";
const both = greeting + yourName;
//console.log(both);

// // //C. Booleans
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
  console.log(a === a != d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// //E. Driver's Ed

let age = 2;
if (age >= 16) {
	console.log("Here are the keys!")
}else {
	console.log("Sorry, you're too young.");
};

// //II. Loops
//A. The basics
for (let i = 0 ; i <= 10; i++) {
	console.log(i);
};

for (let i = 10 ; i <= 400; i++) {
	console.log(i);
};

for (let i = 11; i < 4000; i++) {
	 i += 2;
	 console.log(i);
}
// //B. Get even
// //1.
for (let i = 1; i <= 100; i++) {
	console.log(i);
};
2.

for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log(`${i}<-- is an even number`);
	} else {
		console.log(i);
	}
};

// //C. Give me Five
// //1. && 2.
for (let i = 1; i<=100; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(`I found a ${i}. High five! Three is a crowd`)
	} else if (i % 5 === 0) {
		console.log(`I found a ${i}. High five!`);
	} else if ( i % 3 === 0) {
		console.log(`I dound a ${i}. Three is a crowd`);
	}
};

// //D. Savings account
// //1.
let bank_account = 0;
for (let i = 1; i<=10; i++) {
	bank_account += i; 	
}

console.log(bank_account);
// //2.

let bank_account2 =0;
for (let i = 1; i <= 100; i++) {
	bank_account2 += i*2; 	
}

console.log(bank_account2);

// //E. Multiples of 3 and 5
let sum = 0;
for (let i = 1; i <10; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum += i;
	}
}

console.log(sum);
// //done this befor.

// //III. Arrays & Control flow

// //A. Talk about it:
// //1. What are the things in an array called?
//   //elements.
// //2. Do Arrays guarantee those things will be in order?
//   //the elements don't have to be in orders
// //3. What real-life thing could you model with an array?
// //   personal information (name).

// //B. Easy Does It

// //1.
const quotes = ["hello", "this is Michael", "What is your name"];

// //C. Accessing elements
const randomThings = [1, 10, "Hello", true];
// //1. 
randomThings[0];
// //2.
randomThings[2] = ["World"];
console.log(randomThings[0]);
console.log(randomThings[2]);
// //3.
console.log(randomThings);

// //D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// //1. 
ourClass[2];
console.log(ourClass[2]);
// //2.
ourClass[4] = "Octocat";
// //3.
ourClass.push("Cloud City");
console.log(ourClass);

// //E. Mix It Up
const myArray = [5, 10, 500, 20];
// // //1.
myArray.push("Egon");
console.log(myArray);
// // //2.
myArray.shift();
console.log(myArray);
// // //3.
myArray.unshift("Bob Marley");
console.log(myArray);
// // //4.
myArray.pop();
console.log(myArray);
// // //5.
myArray.reverse();
console.log(myArray);
// // //didn't mutate the array. change. return the reverse array.

// // //F. Biggie Smalls
let number1 = 10;
if(number1 < 100) {
	console.log("little number");
} else {
	console.log("big number");
}

// //G. Monkey in the Middle
let number2 = 9;

if (number2 < 5) {
	console.log("little number");
} else if (number2 > 10) {
	console.log("big number");
} else {
	console.log("monkey");
}

// //H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// // //1. 
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
// // //2.
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
// // //3.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
// // //4.
const thomsShirt = thomsCloset[0];
console.log(thomsShirt);
console.log(thomsCloset[0][0]);
// // //5. 
console.log(thomsCloset[1][0]);
// // //6.
console.log(thomsCloset[2][1]);
// // //7.
console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][2]} and ${thomsCloset[2][0]}.`);
// // //8.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1][2]);

// //IV. Functions
// //A. printGreeting
const printGreeting = (name) => {
	name = "Michael";
	return "Hello there " + name;
};
console.log(printGreeting(name));

// //B. printCool

const printCool = (name) => {
	
	return name + " is cool";
}
console.log(printCool("Michael"));

// //C. calculateCube
const calculateCube = (size) => {
	let a = Math.pow(size,3);
	return a;
}
console.log(calculateCube(8));

// //D isVowel
const isVowel = (char) => {
	const vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
	for (let j = 0; j < vowel.length; j++) {
		if (char === vowel[j]) {
			
			return true;
		} 
	}
			return false;
		
	} //loops working!
// // 	// if (char === "a" || char === "A" || char === "e" || char === "E" || 
// // 	// 	char === "i" || char === "I" || char === "o" || char === "O" || 
// // 	// 	char === "u" || char === "U") {
// // 	// 	return true;
// // 	// } else {
// // 	// 	return false;
// // 	// }


console.log(isVowel("E"));

// ////E. getTwoLengths
 
const getTwoLengths = (string1, string2) => {
	
	let array1 = string1.split("");
	let array2 = string2.split("");
	const arrayLength = [array1.length, array2.length];
		
	return arrayLength;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// //F. getMultipleLengths
// let getMultipleLengths = (arrayOfStrings) => {
// 	let setArray = [];
// 	let newArray = [];
// 	for (let i = 0; i < setArray.length; i++) {
// 		 newArray = setArray[i].split("");
// 		for (let j = 0; j < newArray.length; j++) {
// 			arrayOfStrings = 
// 		}
// 	}

// } //not done yet!!!!!!!!!!!!!

// //G. maxOfThree
const maxOfThree = (a, b, c) => {
	if (a >= b && a >= c) {
		return a;
	} else if (b >= c) {
		return b;
	} else {
		return c;
	}
};

console.log(maxOfThree(6, 9, 1));

// //H. printLongestWord

// // let printLongestWord = (wordArray) => {

// // } not sure yet!!!!!!!!!!

// //I. transmogrify

let transmogrify = (a, b, c) => {
	let result1 = 0;
	result1 = Math.pow(a*b, c);
	return result1;
};

console.log(transmogrify(5, 3, 2));

// //J. reverseWordOrder v2

// // let reverseWordOrder = (Onestring) => {

// // } not sure yet!!!!!!!!

// //K. Get down and dirty with Math.random()
// //1.
let randomNum = (num3) =>{
	num3 = Math.floor(Math.random()*num3) + 1;
	
	return num3;
}
console.log(randomNum(10));

// //2.

let randomNum1 = (num4, num5) =>{
	let randomNum2 = 0;
	randomNum2 = Math.floor(Math.random()*(num5 - num4 +1)) + num4;
	
	return randomNum2;
}

console.log(randomNum1(10, 100));

// // //3.
let randomNum2 = (num6, num7) =>{
	let randomNum3 = 0;
	randomNum3 = Math.floor(Math.random()*(num6 - num7 +1)) + num6;
	
	return randomNum3;
}

console.log(randomNum1(532, 13267));

// // //4. same as 1
// // //5.
const requotes = ["hello", "this is Michael", 
					"What is your name", "have a nice day", "see you tomorrow"];
const getRandomElement = (randomQuote) => {
	
		randomQuote = requotes[Math.floor(Math.random()*requotes.length)];
	
	return randomQuote;
}
console.log(getRandomElement(requotes));

// //Objects
// //A. Make a user object
// //1 & 2
const user = {
	name: "Mike",
	email: "mdd12@hotmail.com",
	age: 19,
	purchased:[]
};
//B Update the user
//1.
user.email = "mdki121@hotmail.com";
//2.
user.age = user.age+1;

// //C. Adding keys and values
// //1.
user.location = "Denver";

// // //D. Shopaholic!
// // //1. && 2. && 3. && 4.
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);
console.log(user);

// // //E. Object-within-object
// // //1.
user.friend = {
	name: "Zhongyu",
	age: 19,
	location: "Denver",
	purchased:[]
};
// // //2.
console.log(user.friend.name);
// // //3.
console.log(user.friend.location);
// // //4. 
user.friend.age = 55;
// // //5. 
user.friend.purchased.push("The One Ring");
// // //6.
user.friend.purchased.push("A latte");
// // //7.
console.log(user.friend.purchased[1]);

// //F. Loops
// //1.























