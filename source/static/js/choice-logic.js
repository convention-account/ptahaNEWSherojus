
function switchLanguage(language) {
    if (language === 'ua') {
        document.getElementById('language-link').innerHTML =
            '<img src="source/static/img/ukrainian-icon3.svg" alt="UA Flag" class="flag-icon"> UA';
        window.location.href = 'index-ua.html'; // Переход на украинскую версию сайта
    } else if (language === 'lt') {
        document.getElementById('language-link').innerHTML =
            '<img src="source/static/img/lithuanian-icon.svg" alt="LT Flag" class="flag-icon"> LT';
        window.location.href = 'index.html'; // Переход на литовскую версию сайта
    }
}

// window.onload = function () {
//     const currentPage = window.location.pathname.split('/').pop();
//     const languageLink = document.getElementById('language-link');

//     if (currentPage === 'index.html') {
//         languageLink.innerHTML =
//             '<img src="source/static/img/lithuanian-icon.svg" alt="UA Flag" class="flag-icon"> UA';
//     } else if (currentPage === 'index-ua.html') {
//         languageLink.innerHTML =
//             '<img src="source/static/img/ukrainian-icon3.svg" alt="LT Flag" class="flag-icon"> LT';
//     }
// };

document.addEventListener("DOMContentLoaded", function() {
    var burgerIcon = document.getElementById("burgerMenu");
    var menuItems = document.querySelector(".navbar-items");
    
    // Убедитесь, что меню изначально скрыто
    menuItems.classList.remove("active"); 

    if (burgerIcon && menuItems) {
        // Анимация открытия и закрытия бургер-меню
        burgerIcon.addEventListener("click", function() {
            menuItems.classList.toggle("active");
            burgerIcon.classList.toggle("active");
        });
    }

    // Обработка дропдауна для языка
    var languageDropdown = document.querySelector('.language-dropdown');
    
    if (languageDropdown) {
        languageDropdown.addEventListener('click', function() {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Закрытие дропдауна при клике вне области
        document.addEventListener('click', function(event) {
            if (!languageDropdown.contains(event.target)) {
                var dropdownMenu = languageDropdown.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                    dropdownMenu.style.display = 'none';
                }
            }
        });
    }

    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation(); // Предотвращает закрытие дропдауна при клике на него
            var dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    });
});
