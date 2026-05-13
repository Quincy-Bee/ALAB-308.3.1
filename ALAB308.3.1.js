/* part 1: fizz buzz */

for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");

  } else if (i % 3 === 0) {
    console.log("Fizz");

  } else if (i % 5 === 0) {
    console.log("Buzz");

  } else {
    console.log(i);
  }

}

// /* part 2: prime time*/

let n = 4;

while (true) {

  let isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(n);
    break;
  }

  n++;
}

/* part 3: feeling loopy */

const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

let cell = "";
let row = [];

for (let i = 0; i < csv.length; i++) {

  let char = csv[i];

  if (char === ",") {
    row.push(cell);
    cell = "";

  } else if (char === "\n") {
    row.push(cell);
    console.log(row);
    row = [];
    cell = "";

  } else {
    cell += char;
  }
}