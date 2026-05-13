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

/* part 2: Pprime time*/

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