var taskInput = document.querySelector('#task-input');
var btnAction = document.querySelector('#btn-action');
var taskList = document.querySelector('#task-list');

var tasks = [];

function showEmptyMessage() {
    taskList.innerHTML = "";

    var emptyLi = document.createElement('li');
    var emptyP = document.createElement('p');

    emptyP.innerHTML = "No task available.";
    emptyP.style.fontStyle = 'italic';
    emptyP.style.color = 'silver';

    emptyLi.appendChild(emptyP);
    taskList.appendChild(emptyLi);
}


showEmptyMessage();

btnAction.addEventListener('click', function () {
    if (taskInput.value === '') {
        alert('Enter your task !!');
        return;
    }

    tasks.push({ text: taskInput.value, completed: false });
    taskInput.value = "";

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        showEmptyMessage();
    }

    tasks.map(function (task, idx) {
        var liEle = document.createElement('li');

        var fieldDiv = document.createElement('div');
        fieldDiv.style.display = "flex";
        fieldDiv.style.alignItems = "center";
        fieldDiv.style.gap = "8px";

        var checkIcon = document.createElement('i');
        checkIcon.classList.add('ri-checkbox-blank-circle-line');

        checkIcon.addEventListener('click', function () {
            task.completed = !task.completed;

            if (task.completed) {
                checkIcon.setAttribute('class', 'ri-checkbox-circle-line');
                taskPara.style.textDecoration = "line-through";
            } else {
                checkIcon.setAttribute('class', 'ri-checkbox-blank-circle-line');
                taskPara.style.textDecoration = "none";
            }
        });

        var taskPara = document.createElement('p');
        taskPara.innerHTML = task.text;

        var delIcon = document.createElement('i');
        delIcon.classList.add('ri-close-line');
        delIcon.style.cursor = "pointer";

        delIcon.addEventListener('click', function () {
            tasks.splice(idx, 1);

            if (tasks.length === 0) {
                showEmptyMessage();
            } else {
                btnAction.click(); 
            }
        });

        fieldDiv.appendChild(checkIcon);
        fieldDiv.appendChild(taskPara);

        liEle.appendChild(fieldDiv);
        liEle.appendChild(delIcon);

        taskList.appendChild(liEle);
    });
});