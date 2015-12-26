var playList = [];
playList.push('I Did It My Way');
playList.push('Respect', 'Imagine');
playList.unshift('Born to Run');
playList.unshift('Louie Louie', 'Mabellene');

var lastItem = playList.pop();
var firstItem = playList.shift();

for (i = 0; i < playList.length; i++) {
    console.log(playList[i]);
}

var playString = playList.join(', ');
console.log(playString);

var playRepeat = playList.concat(playList);
var position = playList.indexOf('Imagine');
var position2 = playList.indexOf('Hello');

console.log(playRepeat);
console.log(position);
console.log(position2);
