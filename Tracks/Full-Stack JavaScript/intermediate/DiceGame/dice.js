var dice = function(sides) { 
  this.sides = sides;
  
}


dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    console.log(randomNumber);
    return randomNumber;
}