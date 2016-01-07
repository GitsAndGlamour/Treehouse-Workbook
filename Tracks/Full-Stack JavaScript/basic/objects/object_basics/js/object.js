/* Object Literal */
var student = {
    name: "Dave",
    grades: [80, 85, 90, 95],

};

var person = {
    name : "Sarah",
    country: "US",
    age : 35,
    treehouseStudent : true,
    skills : ['JavaScript', 'HTML', 'CSS']
}

/* Access value of Object */

alert(person['name']);
/* brackets or dot.notation */
alert(person.name);

/* add property and value */
function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}
person.name = "Bob";
person.country = "Brazil";
person.age += 5;
var message = '<p>Hello. My name is '  + person.name + '.</p>';
    message += '<p>I live in the country of ' + person.country + '.</p>';
    message += '<p>I am ' + person.age + '.</p>';
    message += '<p>I have ' + person.skills.length + ' different skills. They are ' + person.skills.join(', ') + '.</p>';

print(message);

/*for in loop*/

for (var property in student) {
    console.log(property, ': ', student[property]);
}
