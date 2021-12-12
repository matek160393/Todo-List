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
            ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlStrings;
    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })

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