function alertRandom(upper, lower) {
    if (isNaN(upper) || isNaN(lower) || upper == NULL || lower == NULL) {
        throw new Error('This is not a number.');
    } else if (parseInt(lower) > parseInt(upper)) {
        alert("That will not work.");
    } else {
         var randomNumber = Math.floor( Math.random() * upper ) + parseInt(lower);
    alert(randomNumber);
    }
}
/* Challenge part 2 */
var upper = prompt("Choose an upper value.");
var lower = prompt("Choose a lower value.");

    alertRandom(upper, lower);
