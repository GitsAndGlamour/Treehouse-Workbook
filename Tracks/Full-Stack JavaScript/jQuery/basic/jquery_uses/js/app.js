//Hide Warning, then show Warning Slowly
function myCode() {
$(".warning").hide().show("slow");
}
myCode();
/*
Document ready runs code when it's ready:
$(document).ready(myCode);

Document ready alternative versions:
ver. 2
var myCode = function() {
    $(".warning").hide().show("slow");
};

$(document).ready(myCode);

ver. 3
$(document).ready(function() {
    $(".warning").hide().show("slow");
});

ver. 4
$(function() {
    $(".warning").hide().show("slow");
});
*/
