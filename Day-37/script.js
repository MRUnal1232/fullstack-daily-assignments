var addBtn = document.getElementById("addBtn");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText === "") return; 
    var li = document.createElement("li"); 
    var span = document.createElement("span");
    span.textContent = taskText;
    var del = document.createElement("i");
    del.className = "ri-close-line delete-btn";
    del.onclick = function () {
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(del);
    taskList.appendChild(li);
    taskInput.value = "";
}