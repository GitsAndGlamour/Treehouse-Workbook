//Problem: When clicking on an image, the user reaches a dead end.
//Solution: Create an overlay with a large image (simple lightbox).
var $overlay = $('<div id ="overlay"></div>');
var $overlayBlock = $('<div id ="overlay_block"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
$overlay.append($overlayBlock);
$overlayBlock.append($image);
$overlay.append($caption);
$("body").append($overlay);
$("#imageGallery a").click(function(event) {
    event.preventDefault();
    var imgLoc = $(this).attr("href");
    $image.attr("src", imgLoc);
    console.log(imgLoc);
    $overlay.show();
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

});
$overlay.click(function() {
    $overlay.hide();
});
