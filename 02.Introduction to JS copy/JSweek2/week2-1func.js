function mult(a, b) {
  var c = a * b;
  console.log(c);
}

mult(2, 2);

// Array

var myArray = ["Messi", "Ronaldo", "Pedri", "Xavi"];
console.log(myArray[1]);
console.log(myArray.length);

var myObject = {
  color: "green",
  price: 100,
  married: false,
};

console.log(myObject);

var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}

function arrBuider(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}

var simpleArray = arrBuider("apple", "banana", "kivi");

console.log(simpleArray);
