// for (var i = 1; i < 11; i++) {
//   console.log(i);
// }
// console.log("Can i get a hoo yeeaaahhh");

// var i = 1;

// while (i <= 10) {
//   console.log(i);
//   i = i + 1;
// }
// console.log("Can i get a hoo yeah");

// for (var i = 1; i <= 2; i++) {
//   for (var j = 1; j <= 7; j++) {
//     console.log("Week " + i + " day " + j);
//   }
// }

var cubes = "ABCDEFG";

for (var i = 0; i < cubes.length; i++) {
  var styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    console.log(i);
  }
}

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}
