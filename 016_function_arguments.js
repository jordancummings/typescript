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
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log("Team: " + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard("Jazz", "Neto", "Mitchell", "Ingles", "Favors", "Gobert");
//# sourceMappingURL=016_function_arguments.js.map