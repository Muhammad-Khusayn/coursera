let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  //   Didn`t quite get the if function and return following it.
  if (counter === 0) return;
  example();
}

console.log(example());
