// function printAddress(street: string, streetTwo?: string, zip?: string, state = "UT") {
//   console.log(street);
//   if (streetTwo) {
//     console.log(streetTwo);
//   }
//   console.log(state);
// }

// printAddress("123 Fake Street");
// printAddress("123 Fake Street", "Suite 201");
// printAddress("123 Fake Street", "Suite 201", "84058");

function lineupCard(team: string, ...players: string[]) {
  console.log("Team: " + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard("Jazz", "Neto", "Mitchell", "Ingles", "Favors", "Gobert");