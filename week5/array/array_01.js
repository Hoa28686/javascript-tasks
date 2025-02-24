let teamMembers = ["John", "Emily", "Mike", "Sarah"];
console.log(`Original array: `, teamMembers);
// 1. Loop through the `teamMembers` array and log each name to the console.
teamMembers.forEach((member) => console.log(member));
// 2. Remove the first member of the array.
teamMembers.shift();
console.log("2. Remove first member: ", teamMembers);

// 3. Remove the last member of the array.
teamMembers.pop();
console.log("3. Remove the last member: ", teamMembers);

// 4. Add a new member "Alex" to the front of the array.
teamMembers.unshift("Alex");
console.log('4. Add "Alex" to the beginning: ', teamMembers);
// 5. Append a new member "Linda" to the end of the array.
teamMembers.shift("Linda");
console.log('5. Add "Linda" to the end: ', teamMembers);
// 6. Create a new array that excludes the first two members, keeping the original array unchanged.
const removeFirstTwo = teamMembers.slice(2);
console.log("7. Remove first two members: ", removeFirstTwo);
console.log("Original array: ", teamMembers);
// 7. Find the index of "Mike" in the array.
console.log("8. Index of Mike is ", teamMembers.indexOf("Mike"));
// 8. Try to find the index of "Jake" (who is not in the array).
const indexOfJade =
  teamMembers.indexOf("Jade") > -1 ? teamMembers.indexOf("Jade") : "not found";
console.log("9. Index of Jade is", indexOfJade);
// 9. Replace "Mike" with "Carol" and "Bruce" in the same position.
teamMembers.splice(teamMembers.indexOf("Mike"), 1, "Carol", "Bruce");
console.log('9. Replace "Mike" with "Carol" and "Bruce": ', teamMembers);
// 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.
const concat = teamMembers.concat("Bob");
console.log("10. Concat Bob to array: ", concat);
// 11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.
const copy = teamMembers.slice(0);
console.log("11. Copied array: ", copy);
// 12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.
const newMembers = ["Tina", "Dean"];
const merge = teamMembers.concat(newMembers);
console.log("12. Merged array: ", merge);
// 13. Find all occurrences of "John" in the array and store their positions in a new array.
const indexJohn = [];
teamMembers.forEach((member, index) => {
  if (member == "John") {
    indexJohn.push(index);
  }
});
console.log("13. John positions in the array: ", indexJohn);
// 14. Transform all names in the array to be uppercase while keeping the original array unchanged.
const upper = [];
teamMembers.forEach((member) => upper.push(member.toUpperCase()));
console.log("14. uppercase array:", upper);

// 15. Sort `teamMembers` in alphabetical order.
console.log("15. Sorted array:", teamMembers.sort());
// 16. Reverse the `teamMembers` array.
console.log("16. Reversed array:", teamMembers.reverse());
// 17. Check if at least one member in the array is named "John".
console.log(
  '17. Check if at least one member in the array is named "John": ',
  teamMembers.includes("John")
);
// 18. Check if all names in the array have more than three letters.
// long way:
// let count = 0;
// teamMembers.push("mia");
// const checkThreeLetter = () => {
//   let count = 0;
//   teamMembers.forEach((member) => {
// if (member.length <= 3) {
//   count = count + 1;
// }
//   });
//   return count == 0 ? true : false;
// };
//
// console.log(
//   "18. All names in the array have more than three letters: ",
//   checkThreeLetter()
// );
//
console.log(
  "18. All names in the array have more than three letters: ",
  teamMembers.every((member) => member.length > 3)
);
