// Question 24)
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

console.log("\nAnswer 24");

let string1: string = 'hello';
let string2: string = 'world';
let number1: number = 10;
let number2: number = 5;
let fruits: string[] = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("\n \nIs string1 == string2? I predict False.");
console.log(string1 == string2);

console.log("Is string1 != string2? I predict True.");
console.log(string1 != string2);

// Tests using the lower case function
console.log("Is 'HELLO' in lowercase equal to 'hello'? I predict True.");
console.log('HELLO'.toLowerCase() == 'hello');

// Numerical tests
console.log("Is number1 == number2? I predict False.");
console.log(number1 == number2);

console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log("Is number1 > 5 and number2 < 10? I predict True.");
console.log(number1 > 5 && number2 < 10);

console.log("Is number1 > 15 or number2 < 3? I predict False.");
console.log(number1 > 15 || number2 < 3);

// Test whether an item is in an array
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
