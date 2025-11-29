function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return alert("Enter a task!");

    let li = document.createElement("li");
    li.textContent = task;

    li.onclick = function () {
        this.classList.toggle("completed");
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
