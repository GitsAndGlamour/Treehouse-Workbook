function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
 var sixSidedDice = new dice(6);
  var result = sixSidedDice.roll();
  printNumber(result);
};