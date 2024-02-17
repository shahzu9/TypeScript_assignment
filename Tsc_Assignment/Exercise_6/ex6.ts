
// Question 6)
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure bou use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displabed. Then print the name after striping the white spaces.

console.log("Answer 6");

// Store the person's name with whitespace characters
let personName1: string = "\t   MS_Malik   \n";

// Print the name with whitespace
console.log("Name with whitespace:", personName1);


// Strip whitespace using trim() function
let stripedName: string = personName1.trim();

// Print the stripped name
console.log("Stripped name: ", stripedName);