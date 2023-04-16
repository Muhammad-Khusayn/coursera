// Polymorphism
// create your classes here
class Football {
  laLiga() {
    console.log("We pay refs to help us!");
  }
}
class Barcelona extends Football {
  laLiga() {
    super.laLiga();
    console.log("But we show a good footbal");
  }
}
class RealMadrid extends Football {
  laLiga() {
    console.log("We dont try but somehow we win");
  }
}

var barca = new Barcelona();
var real = new RealMadrid();
barca.laLiga();
real.laLiga();
