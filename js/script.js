{
    const tasks = [
        {
            content: "zapłacić rachunki",
            done: false
        },
        {
            content: "odkurzyć dywan",
            done: true
        },
    ];

    const render = () => {
        let htmlStrings = "";
        for (const task of tasks) {
            htmlStrings += `
            <li>
            ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlStrings;
    }

    const init = () => {
        render();
    }

    init();
}