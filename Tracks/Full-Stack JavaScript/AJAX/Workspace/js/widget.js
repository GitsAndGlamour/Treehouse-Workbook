$(document).ready(function () {
  var url = "../data/employees.json";

  var data = function(response) {
    var statusHTML = '<ul class="bulleted">';
      $.each(response, function(index, employee) {
        if(employee.inoffice === true) {
          statusHTML += '<li class = "in">';
        } else {
          statusHTML += '<li class = "out">';
        }
        statusHTML += employee.name + '</li>';
      });
    statusHTML += '</ul>';
    $("#employeeList").html(statusHTML);
  }; // end data
  // call back fn
  $.getJSON(url, data).fail(function (jqXHR) {
        alert(jqXHR.status + " " + jqXHR.statusText);
  });
}); // end document ready fn

var AJAX = new XMLHttpRequest();
AJAX.onreadystatechange = function () {
  if(AJAX.readyState === 4 && AJAX.status === 200) {
    var rooms = JSON.parse(AJAX.responseText);
    var statusHTML = '<ul class="bulleted rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
AJAX.open('GET', '../data/rooms.json');
AJAX.send();
