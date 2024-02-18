"use strict";
// Question 3)
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Answer 3");
// Store a person’s name in a variable
let personName = "Malik";
// print the person’s name in lowercase
console.log("LowerCase:  ", personName.toLowerCase());
// print the person’s name in lowercase
console.log("UpperCase:  ", personName.toUpperCase());
// print the person’s in titlecase
console.log("TitleCase: ", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
