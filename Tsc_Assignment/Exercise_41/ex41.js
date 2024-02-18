"use strict";
// Question 41)
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("Answer 41");
function showMagicians(magicians) {
    // Prints the name of each magician in the array
    magicians.forEach(magician => console.log(magician));
}
// Array of magician names
const magicianNames = ["Saim Ayub", "Malik", "Herry", "Ronaldo", "Shahrukh"];
// Call the function to show magician names
showMagicians(magicianNames);
