var names : string[] = ["Jordan", "Leschia", "Shawna", "Alia", "Amya", "Desmond", "Mathias"];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);