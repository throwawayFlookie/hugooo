const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    const header = task.querySelector('.task-header');
    const details = task.querySelector('.details');
    const arrow = task.querySelector('.arrow');

    header.addEventListener('click', () => {
        const isOpen = details.classList.contains('open');
        details.classList.toggle('open');
        arrow.classList.toggle('open');
    });
});