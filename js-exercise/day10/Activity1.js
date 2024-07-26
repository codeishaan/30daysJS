document.getElementById('task1Button').addEventListener('click', () => {
    document.getElementById('task1Paragraph').textContent = 'Text changed';
});

document.getElementById('task2Image').addEventListener('dblclick', () => {
    const img = document.getElementById('task2Image');
    img.style.display = img.style.display === 'none' ? 'block' : 'none';
});
