
// Select HTML Elements

let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");


// Add Task Event

addTaskBtn.addEventListener("click", function () {

    let taskText = taskInput.value.trim();

    // Empty Input Validation

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create List Item

    let li = document.createElement("li");

    // Create Checkbox

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create Task Text

    let span = document.createElement("span");
    span.textContent = taskText;

    // Mark Task as Completed

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            span.classList.add("completed");
        } else {
            span.classList.remove("completed");
        }

    });

    // Create Delete Button

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Delete Task Event

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add Elements to List Item

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Display Task

    taskList.appendChild(li);

    // Clear Input and Focus

    taskInput.value = "";
    taskInput.focus();

});

