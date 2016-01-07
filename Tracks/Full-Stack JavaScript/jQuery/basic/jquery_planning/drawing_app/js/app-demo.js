//Problem: No user interaction causes no change to application.
//Solution: When use interacts, cause changes appropriately.
var red = 0;
var green = 0;
var blue = 0;
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

// When clicking on control list items
var $controls = $(".controls ul");
$controls.on( "click", "li", function () {
    console.log("Click regisered by log.");
    // Deselect sibling elements
    $(this).siblings().removeClass("selected");
    // Select clicked elements
    $(this).addClass("selected");
    color = $(this).css("background-color");
});
$(".new").click ( function () {
    console.log("Click regisered by log.");
})
// When new color is pressed
$("#revealColorSelect").click( function () {
    // Show/hide color select div
    $("#colorSelect").toggle();
});
// When color sliders change
$("#width").change( function () {
    context.lineWidth = $(this).val();
});
$(".sliders p input").change( function () {
    if($(this).attr("id") == "red") {
        red = $(this).val();
    } else if ($(this).attr("id") == "green") {
        green = $(this).val();
    } else if ($(this).attr("id") == "blue") {
        blue = $(this).val();
    }
    function rgbColor(red, green, blue) {
        var value = "rgb(" + red + ", " + green + ", " + blue + ")";
        return value;
    }
    // update the new color span
    $("#newColor").css("background-color", rgbColor(red,green,blue));
});
// When add color is pressed
$("#addNewColor").click( function() {
    var $newColor = $('<li></li>');
    $newColor.css("background-color", $("#newColor").css("background-color"));
    // Append color to the controls
    $(".controls ul").append($newColor);
    $newColor.click();
});

// On mouseEvent on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});
