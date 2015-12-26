/* Variable identification and/or definition */
var search;
var isStudent = false;
var isNotStudent;
var studentResult = "";
var message;
var students;

/* Object creator */
var newStudent = function(name_, track_, achievements_, points_){
    var student ={
        name: name_,
        track: track_,
        achievements: achievements_,
        points: points_
    };

/* Return object */
    return student;
};
/* Print to Element ID */
var print = function(message){
    var div = document.getElementById('output');
    div.innerHTML =  message;
};

/* Student instantiations */
var student_1 = newStudent("Cindy", "PHP", 15, 450);
var student_2 = newStudent("Jim", "JavaScript", 95, 4030);
var student_3 = newStudent("Henry", "Ruby", 30, 900);
var student_4 = newStudent("Keisha", "HTML/CSS", 5, 150);
var student_5 = newStudent("Habib", "Python", 75, 3500);

/* Adding students to array */
students = [student_1, student_2, student_3, student_4, student_5];

/* Array print format */
message = "<ul>";
/* Loops through the array */
for (var i = 0; i < students.length; i++) {
    message += "<p> Student No. " + (i+1);

    /* Loops through the object properties */
    for(var key in students[i]) {
        message += "<p>" + key + " : " + students[i][key] + "</p>";
    };
    /* Apply closing tags */
    message += "</p>"
};
message += "</ul>";

/* Prompt Search feature*/
while (true) {
    /* User search prompt */
    search = prompt("Search for a student in our database. Type 'list' to show all of the students and 'quit' to exit.");
    /* If NULL or quit - then exit the loop with a break statement */
    if( search === null || search.toLowerCase() === 'quit') {
        break;
    /* If list - then apply array list formatting */
    } else if (search === 'list') {
        print(message);
        /* Else - run query */
    } else {
        /* If search matches name property in students array of objects... */
        for(var q = 0; q < students.length; q++) {
            if(search == students[q]['name']) {
                /* Then there is a student - mark isStudent TRUE */
                isStudent = true;
                /* For-in loop to display student properties and data */
                for(var prop in students[q]) {
                    studentResult += "<p>" + prop + " : " + students[q][prop] + "</p>";

                }
                /* Print results when finished gathering properties */
                print(studentResult);
            }
        }
        /* If there is not a student- print statement regarding results */
        if (!isStudent){
            isNotStudent = "There is no student information available on " + search + ".";
            print(isNotStudent);
        }
    }
}
