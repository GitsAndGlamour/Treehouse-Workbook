document.writeln("<h2>Rounded Numbers</h2>");

document.writeln(Math.round(2.2));
document.writeln(Math.round(3.9));

document.writeln("<h2>Randomized Numbers</h2>");

var dieRoll = Math.floor(Math.random()*6);
document.writeln("You rolled a " + dieRoll);
