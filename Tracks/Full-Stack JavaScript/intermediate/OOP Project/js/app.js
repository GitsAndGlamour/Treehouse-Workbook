//Problem: User ineractiion doesn't provide desired results.
//Solution: Add interactivity so that the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks

var createNewTaskElement = function(taskString) {
    //Create li
    var listItem = document.createElement("li");
    //Checkbox input
    var checkBox = document.createElement("input");
    //Label
    var label = document.createElement("label");
    //Text input
    var editInput = document.createElement("input");
    //Edit class button
    var editButton = document.createElement("button");
    //Delete class button
    var deleteButton = document.createElement("button");
    //Each element modified
    checkBox.type = "checkbox";
    editInput.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskString;
        //and appended each element
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

    return listItem;
};
// Add new tasks
var addTask = function () {
    console.log("Add task...");
    //Create new list item with text from #new-task:
    var listItem = createNewTaskElement(taskInput.value);
        //Append listItem to incompleteTasksHolder
        incompleteTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
};

// Edit existing tasks
var editTask = function () {
    console.log("Edit task...");
    var listItem = this.parentNode;
        var editInput = listItem.querySelector("input[type=text]");
        var label = listItem.querySelector("label");
            //Switch from edit mode
            //If class of parent is Edit
            if(listItem.classList.contains("editMode")) {
            //Label text become input's value
            label.innerText = editInput.value;
        }
        //Else switch to edit mode
        else {
            //Input value becomes the label's text
            editInput.value = label.innerText;
        }
        //Toggle edit mode
        listItem.classList.toggle("editMode");
};

// Delete an existing task
var deleteTask = function () {
    console.log("Delete task...");
    //When the delete button is pressed
    var listItem = this.parentNode;
        //Remove the paren list item from the ul
        var ul = listItem.parentNode;
        ul.removeChild(listItem);
};

// Mark a task as complete
var taskCompleted = function () {
    console.log("Task completed...");
            //Append task list item to #compleed-tasks
            var listItem = this.parentNode;
            completedTasksHolder.appendChild(listItem);
            bindTaskEvents(listItem, taskCompleted);
};

// Mark a task as incomplete
var taskIncomplete = function () {
    console.log("Task completed...");
    //When checkbox is unchecked
        //Append to #incomeplete-tasks
        var listItem = this.parentNode;
        incompleteTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskIncomplete);
};

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    //Select li children
    console.log("Bind list item evens");
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
        //Bind editTask to edit button
        editButton.onclick = editTask;
        //Bind deleteTask to delete button
        deleteButton.onclick = deleteTask;
        //Bind  checkBoxEventHandler to checkbox
        checkBox.onchange = checkBoxEventHandler;
};
var ajaxRequest = function () {
    console.log("Ajax request...");
};
addButton.onclick = addTask;
addButton.addEventListener("click", "ajaxRequest");
//Cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
  //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
