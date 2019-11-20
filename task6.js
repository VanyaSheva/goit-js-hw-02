let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Enter some numbers here:");
  numbers.push(Number(input));

  if (input === null) {
    console.log("Press f5 to start again");
    break;
  }
}
for (number of numbers) {
  total = total + number;
}
console.log(total);
