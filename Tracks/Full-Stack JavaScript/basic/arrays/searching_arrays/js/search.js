/* Array Search - Multiple Use Shopping List */
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread',
                'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers',
                'onion', 'tofu', 'frozen dinner', 'cucumber'];

var print = function(message) {
    document.write('<p>' + message + '</p>');
};

while (true) {
    search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit.");
    search = search.toLowerCase();
    if( search === 'quit') {
        break;
    } else if (search === 'list') {
        print(inStock.join(', '));
    } else {
        if(inStock.indexOf(search) >= 0) {
            if(search.charAt(search.length - 1) == 's'){
            print(search + " are in stock!");
            } else {
            print(search + " is in stock!");
        }
        } else {
            if(search.charAt(search.length - 1) == 's'){
            print(search + " are not in stock!");
            } else {
            print(search + " is not in stock.");
            }
        }
    }
}
