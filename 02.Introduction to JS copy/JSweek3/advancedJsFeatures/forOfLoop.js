const laLiga = {
  first: "Barcelona",
  second: "Real Madrid",
  third: "Atletiko de Madrid",
};

var liga = Object.create(laLiga);
liga.fourth = "Sevilla";

for (i in liga) {
  console.log(i);
}
