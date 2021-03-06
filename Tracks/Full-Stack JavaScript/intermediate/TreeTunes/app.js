var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");
var wannabe = new Song("Wannabe", "Spice Girls", "2:58");
var uhHuh = new Song("Uh-Huh", "B2K", "3:52");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(wannabe);
playlist.add(uhHuh);


var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
