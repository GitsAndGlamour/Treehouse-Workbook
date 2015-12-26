var maxRandom = prompt("Choose an n-sided die.");
var parseMax = parseInt(maxRandom);
var minRandom = prompt("Choose the lowest roll.");
var parseMin = parseInt(minRandom);

document.writeln("Player-selected n-sided die: " + maxRandom);
document.writeln("Player-selected minimum: " + minRandom);

var dieRoll = Math.floor(Math.random()*(parseMax-parseMin)) + parseMin;

document.writeln("<p></p>");
document.writeln("Die roll = " + dieRoll);
