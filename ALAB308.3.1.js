/* part 1: fizz buzz */
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

/*Fizz*/

for (let i = 1; i <= 100; i++) {
  //console.log(i);
  if (i % 3 === 0) {
    console.log("Fizz")
  }

}

/*Buzz*/

for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0) {
    console.log("Fizz");
  }

  if (i % 5 === 0) {
    console.log("Buzz");
  }

}



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