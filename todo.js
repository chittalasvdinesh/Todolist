let addBtn = document.getElementById("addBtn");
let reEditBtn = document.getElementById("editBtn");




reEditBtn.classList.add('hideBtn');

let listItems = [];

showTask = (item) => {
    let taskNo = listItems.length + 1;
    let taskName = item.taskName;

    let trId = 'tr' + taskNo;
    //Removes Empty input and alert;
    if (taskName.trim() == "") {
        alert("please enter task")
        listItems.pop();
        return;
    }
    let taskBox = document.getElementById("taskBox");
    let taskRow = document.createElement("tr");
    taskRow.id = trId;

    taskRow.style.height = '100px';
    let taskData1 = document.createElement("td");
    let taskData2 = document.createElement("td");
    let taskData3 = document.createElement("td");

    function editTask() {
        let taskItem = document.getElementById("taskItem");
        taskItem.style.color = 'red';
        taskItem.value = taskName;
        addBtn.classList.add('hideBtn');
        reEditBtn.classList.toggle('hideBtn');


        reEditBtn.onclick = function () {
            taskName = taskItem.value;
            taskData2.textContent = taskName;
            taskItem.style.color = 'black';
            taskItem.value = "";
            addBtn.classList.toggle('hideBtn');
            reEditBtn.classList.toggle('hideBtn');
        }
    }

    function removeTask() {
    
        taskNo = listItems.length + 1;
        taskBox.removeChild(taskRow);
        // console.log('hellow');
    }

    taskData1.textContent = taskNo;
    taskData2.textContent = taskName;
    let button1 = document.createElement('button');
    button1.classList.add('btnstyle1');
    button1.textContent = 'Edit';
    button1.addEventListener('click', editTask);

    let button2 = document.createElement('button');
    button2.classList.add('btnstyle2');
    button2.textContent = 'Delete';
    button2.addEventListener('click', removeTask);


    taskData3.appendChild(button1);
    taskData3.appendChild(button2);


    taskRow.appendChild(taskData1);
    taskRow.appendChild(taskData2);
    taskRow.appendChild(taskData3);
    taskBox.appendChild(taskRow);
}




listItems.forEach(item => showTask(item));


// For adding the task
function addTask() {
    let taskItem = document.getElementById("taskItem");
    let taskNumber = listItems.length + 1;
    let newItem = {
        taskNo: taskNumber,
        taskName: taskItem.value
    };
    showTask(newItem);
    listItems.push(newItem);
    taskItem.value = "";
}



addBtn.addEventListener('click', addTask)