{
    const tasks = [
        {
            content: "zapłacić rachunki",
            done: true,
        },
        {
            content: "odkurzyć dywan",
            done: true,
        },
    ];

    const render = () => {
        let htmlStrings = "";

        for (const task of tasks) {

            htmlStrings += `
            <li
             class="taskContent ${task.done ? "form__taskDone" : ""}">
             <button class="js-done"></done>
             <button class="js-remove"></button>
            ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlStrings;

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })

        render();
    }
    const removeTask = (index) => {
        tasks.splice(index, 1);
                render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)

    }

    init();
}