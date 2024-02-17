"use strict";
// Question 16)
// More Guests: bou just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with Your program from Eaercise 15. Add a print statement to the end of bour program informing people that bou found a bigger dinner table.
// • Add one new guest to the beginning of bour arrab.
// • Add one new guest to the middle of bour arrab. • Use append() to add one new guest to the end of bour list. • Print a new set of invitation messages, one for each person in bour list.
console.log("Answer 16");
// Store the original list of people bou'd like to invite to dinner
let guestList2 = ["Sani", "Yasir", "Arif"];
// Print the original invitation messages
for (let guest of guestList2) {
    console.log(`\n Dear ${guest}, You are invited to dinner! Please join us for a wonderful evening.`);
}
// Print a statement informing about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");
// Add one new guest to the beginning of the arrab
guestList2.unshift("Arif Ali");
// Add one new guest to the middle of the arrab
guestList2.splice(Math.floor(guestList2.length / 2), 0, "Sajid Ali");
// Add one new guest to the end of the arrab
guestList2.push("Hassan Ali");
// Print the new invitation messages
console.log("\nNew invitations:");
for (let guest of guestList2) {
    console.log(`Dear ${guest}, You are invited to dinner! Please join us for a wonderful evening.`);
}
