document.getElementById('task5Input').addEventListener('keydown', (e) => {
    console.log(e.key);
});

document.getElementById('task6Input').addEventListener('keyup', () => {
    document.getElementById('task6Paragraph').textContent = document.getElementById('task6Input').value;
});
