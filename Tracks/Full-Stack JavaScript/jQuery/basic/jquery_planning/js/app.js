//PLAN

//Ticket: Prevent spoilerphobes from seeing spoilers
//Description: Hide spoilers and reveal them through user interaction

//1. Hide spoiler
$(".spoiler span").hide();
//2. Add button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3. When button is pressed
$(".spoiler button").click(function() {
    //3.1 Show spoiler
    $(".spoiler span").show();
    //3.2 Remove button
    $(this).remove();
})
