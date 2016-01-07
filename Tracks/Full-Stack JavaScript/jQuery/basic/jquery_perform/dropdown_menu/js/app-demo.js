//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to menu.
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links.
$("#menu a").each( function() {
    var $anchor = $(this);
    //Create options
    var $option = $("<option></option>");
    if($anchor.parent().hasClass("selected")){
        $option.prop("selected", true);
    }
    //Options value is the href of the link.
    $option.val($anchor.attr("href"));
    //Option's text is the text of the link.
    $option.text($anchor.text());
    //Append option to select.
    $select.append($option);
});
//Create button
var $button = $("<button>Go</button>");
$select.append($button);
$button.click(function() {
    window.location = $select.val();
});
//Bind click to button
   //Go to select's location.
 //Modivy CSS to hide links on small width and show button and select
   //And it also hides select and button on larger width and show's links
   //Deal with selected options depending on current page
