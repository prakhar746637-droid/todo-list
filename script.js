const taskList = document.getElementById("taskList")
const inputTask = document.getElementById("inputTask")

function addTask(){
    const newTask = document.createElement("li")
    taskList.appendChild(newTask)
    newTask.textContent = inputTask.value
    inputTask.value = ""
    deleteTask(newTask)
}

function deleteTask(newTask){
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = ()=>{
        newTask.remove()
    }
}