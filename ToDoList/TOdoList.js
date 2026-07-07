const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {

    let task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    span.onclick = function(){
        span.classList.toggle("completed");
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "delete-btn";

    delBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});