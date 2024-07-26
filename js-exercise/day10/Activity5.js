document.getElementById('task9List').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent);
    }
});

document.getElementById('task10Parent').addEventListener('click', (e) => {
    if (e.target.id === 'dynamicButton') {
        console.log('Dynamic button clicked');
    }
});
