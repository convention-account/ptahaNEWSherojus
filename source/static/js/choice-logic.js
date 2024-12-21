// Добавляем обработчики для всех кнопок
const viewButtons = document.querySelectorAll('.view-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Показываем модальное окно при нажатии на кнопку
viewButtons.forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

// Закрываем модальные окна
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', function () {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Закрываем модальное окно при клике вне его
window.onclick = function (event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

// Обработчики для кнопок модального окна 1
document.getElementById('spread-view-1').addEventListener('click', function () {
    window.location.href = 'docs/gazeta04-10.html';
});

document.getElementById('flip-view-1').addEventListener('click', function () {
    window.location.href = 'docs/gazeta04-10-view.html';
});

// Обработчики для кнопок модального окна 2
document.getElementById('spread-view-2').addEventListener('click', function () {
    window.location.href = 'docs/gazeta21-10.html';
});

document.getElementById('flip-view-2').addEventListener('click', function () {
    window.location.href = 'docs/gazeta21-10-view.html';
});

// Логика для бургер-меню
document.getElementById('burgerMenu').addEventListener('click', function () {
    document.querySelector('.navbar-items').classList.toggle('active');
});
