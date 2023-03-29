//Iteration 1
const hacker1 = "Gabriel";
const hacker2 = "Gabriel";

console.log(`The driver's name is ${hacker1}.`);

console.log(`The navigator's name is ${hacker2}.`);

//Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//Iteration 3
let driverSpaced = '';
for (i = 0; i < hacker1.length; i++) {
  driverSpaced += hacker1[i].toUpperCase() + ' ';
}
console.log(driverSpaced);

let navigatorReverse = '';
for (i = hacker2.length - 1; i >= 0; i--) {
  navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);

//console.log('a' > 'r');
//console.log('Gabriel' > 'GRob');

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

