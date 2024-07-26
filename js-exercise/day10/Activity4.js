document.getElementById('task7Form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));
});

document.getElementById('task8Select').addEventListener('change', (e) => {
    document.getElementById('task8Paragraph').textContent = e.target.value;
});
