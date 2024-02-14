const button = document.querySelector("#btn");
const input = document.querySelector("input");
const tasksList = document.querySelector("ul");
const checkbox = document.querySelector(".checkbox")

const renderTasks = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasksList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        tasksList.innerHTML += `
            <li>
                <input class="checkbox" type="checkbox" onclick="checkoutTask(${i})" ${tasks[i].isDone ? 'checked' : ''}>
                <span class="${tasks[i].isDone === true ? "done" : ""}">${tasks[i].text}</span>
                <div class="remove_button" onclick="removeTask(${i})"><img width=20 src="trash.png"></div>
            </li>
        `;
    }
}

const checkoutTask = (index) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].isDone = !tasks[index].isDone;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    checkbox.checked = !checkbox.checked;
}

const removeTask = (index) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();

button.addEventListener("click", () => {
    const newTask = {
        text: input.value,
        isDone: false,
    }
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

    input.value = ""
})