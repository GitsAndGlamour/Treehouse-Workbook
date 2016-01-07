var questions = 27;
var welcome = alert("Welcome to Mad Libs for Kids - Winter Holidays Edition. Choose the words for the story and when you're done entering the words, your story will appear!");
var visitorName = prompt("What is your name?" + " (" + (questions-=1) + " questions left.)");
var story = ("<h1>Mr. Snowman! by " + visitorName + "</h1>");

var adjective = prompt("Choose an adjective." + " (" + (questions-=1) + " questions left.)");
story += (" Let's build a snowman! First we need to have a really ");
adjective = prompt("Choose an adjective." + " (" + (questions-=1) + " questions left.)");
story += (adjective + " snowstorm, of a course on a ");
adjective = prompt("Choose an adjective." + " (" + (questions-=1) + " questions left.)");
story += (adjective + " day. Watching all that ");
var color = prompt("Choose a color." + " (" + (questions-=1) + " questions left.)");
story += (color + " snow fall makes me ");
var verb = prompt("Choose a verb." + " (" + (questions-=1) + " questions left.)");
story += (verb + " for a bowl of " + " (" + (questions-=1) + " questions left.)");
adjective = prompt("Choose an adjective." + " (" + (questions-=1) + " questions left.)");
story += (adjective + " ");
var vegetable = prompt("Choose a vegetable." + " (" + (questions-=1) + " questions left.)");
story += (vegetable + "! ");
var exclamation = prompt("Choose an exclamation." + " (" + (questions-=1) + " questions left.)");
story += (exclamation + " it's still ");
var verbing = prompt("Choose a verb that ends in -ing." + " (" + (questions-=1) + " questions left.)");
story += (verbing + " and there's a lot of it! Let's go! Next is ");
verbing = prompt("Choose a verb that ends in -ing." + " (" + (questions-=1) + " questions left.)");
story += (verbing + " to go out in the cold. Once that is done, we need to get busy. We make a ");
var noun = prompt("Choose a noun." + " (" + (questions-=1) + " questions left.)");
story += (noun + " and ");
verb = prompt("Choose a verb." + " (" + (questions-=1) + " questions left.)");
story += (verb + " it in the " + " (" + (questions-=1) + " questions left.)");
var place = prompt("Choose a place." + " (" + (questions-=1) + " questions left.)");
story += (place + ". It gets so ");
adjective = prompt("Choose an adjective." + " (" + (questions-=1) + " questions left.)");
story += (adjective + " we can't roll it anymore. Then we do ");
var number = prompt("Choose a number." + " (" + (questions-=1) + " questions left.)");
story += (number + " more and stack them on top of each other. We ");
verb = prompt("Choose a verb." + " (" + (questions-=1) + " questions left.)");
story += (verb + " for ");
noun = prompt("Choose a noun." + " (" + (questions-=1) + " questions left.)");
story += (noun + " in the driveway for the ");
noun = prompt("Choose a noun." + " (" + (questions-=1) + " questions left.)");
story += (noun + " , eyes and ");
noun = prompt("Choose a noun." + " (" + (questions-=1) + " questions left.)");
story += (noun + ". Mom gives us a scarf, hat and ");
vegetable = prompt("Choose a vegetable." + " (" + (questions-=1) + " questions left.)");
story += (vegetable + " to complete Mr. ");
var person = prompt("Choose a person." + " (" + (questions-=1) + " questions left.)");
story += (person + "! ");
exclamation = prompt("Choose an exclamation." + " (" + (questions-=1) + " questions left.)");
story += (exclamation + " he's done! Finally. Now the best part, ");
adjective = prompt("Choose an adjective." + " (" + (questions-=1) + " questions left.)");
story += (adjective + " ");
noun = prompt("Choose a noun." + " (" + (questions-=1) + " questions left.)");
story += (noun + ".");
var finish = alert("You're finished adding libs. Click OK to read your story.");
document.write(story);
/*
var visitor = prompt("What is your name?");
var message = 'Hello ' + visitor;
console.log(message.length);
if (message.length <= 6) {
    story += ("No name given.");
}
else
    story += (message.toLowerCase());
    alert(message.toUpperCase() + "!!!");
*/
