document.addEventListener('DOMContentLoaded', () => {
    const btnSaludar = document.getElementById('btnSaludar');
    const mensajeSaludo = document.getElementById('mensajeSaludo');

    btnSaludar.addEventListener('click', () => {
        mensajeSaludo.textContent = '¡Hola! Bienvenid@ a la página web de Sarai Sullca Lima 🌸✨';
        mensajeSaludo.classList.remove('oculto');
    });
});