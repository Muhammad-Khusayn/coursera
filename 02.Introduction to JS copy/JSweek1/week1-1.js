var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get salary");
} else if (age < 18) {
  console.log("you get an allowance");
} else {
  console.log("The value of the age is not numerical");
}
