var AJAX2 = new XMLHttpRequest();
AJAX2.onreadystatechange = Function () {
  if(AJAX2.readyState === 4) {
    var rooms = JSON.parse(AJAX2.responseText);
    var statusHTML = '<ul class = "bulleted">';

    for(var i = 0; i < rooms.length; i++) {
      if(rooms[i].available === true) {
        statusHTML += '<li class="empty">';
    } else {
         statusHTML += '<li class="full">';
    }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
  }
    statusHTML += '</ul>';
    console.log(Rooms Show);
    document.getElementById('roomList').innerHTML = statusHTML;
}
  AJAX2.open('GET', 'data/rooms.json');
  AJAX2.send();

};
