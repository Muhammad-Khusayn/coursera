// try {
//   throw new ReferenceError();
// } catch (err) {
//   console.log(err);
//   console.log("I am running");
// }
// console.log("my programm does not stop");

try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log("There was an error");
}
