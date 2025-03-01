const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

// Mostrar modal de scarlet
document.getElementById('btn-scarlet').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('modal-scarlet').style.display = 'block';
});

// Cerrar modal de scarlet
document.getElementById('close-scarlet').addEventListener('click', () => {
    document.getElementById('modal-scarlet').style.display = 'none';
});

// Mostrar modal de alejandro
document.getElementById('btn-victor').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('modal-victor').style.display = 'block';
});

// Cerrar modal de alejandro
document.getElementById('close-victor').addEventListener('click', () => {
    document.getElementById('modal-victor').style.display = 'none';
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});