// Iteration 1: Names and Input
let hacker1 = "Nadine";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Karina";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// Print the drivers name capitals and giving it spaces in between the letters

// making the name upper cased
let upperCaseName = hacker1.toUpperCase();
let spacesName = "";

//console.log(upperCaseName)

// Loop through the name to give each letter a space
for (let i = 0; i < hacker1.length; i++) {
  spacesName += upperCaseName[i] + " ";
}

console.log(spacesName);

// Print the navigators name in reverse order
let reverseName = "";

for (let i = hacker2.length; i > 0; i--) {
  reverseName += hacker2[i - 1];
}

console.log(reverseName);

// Print a string depending on the alphabetical order of the two names

// first if: print if the second name comes after the first
// second if: print if the first name comes after the second
// third if: print if they are the same
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The drivers name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`);
}
else{
    console.log('Something went wrong.')
}