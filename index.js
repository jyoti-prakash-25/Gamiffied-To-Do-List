document.addEventListener('DOMContentLoaded', function() {

    // new task + button
    const newTask = document.querySelector(".lists-section .tasks-list .to-do-list .new-task .plus-button");
    newTask.addEventListener('click', () => {
        const popupTask = document.querySelector(".dark-filter");
        popupTask.style.display = "block";
    });

    // get out of the new task popup
    const darkFilter = document.querySelector(".dark-filter");
    darkFilter.addEventListener('click', () => {
        darkFilter.style.display = "none";
    })

    // add a new task
    const addButton = document.querySelector(".dark-filter .popup-section .popup-task-bar .add-button-popup button");
    addButton.addEventListener('click', (e) => {
            e.preventDefault();
            const inputTask = document.querySelector(".dark-filter .popup-section .popup-task-bar .input-task input");
            if (inputTask.textContent != '') {
                const div = document.createElement('div');
                const taskText = document.querySelector('.dark-filter .popup-section .popup-task-bar .input-task input').value;

            }
        })
        // remove a task
        // yes button
        // no button
        // health, XP, intelligence, productivity mechanics
        // add new list
});