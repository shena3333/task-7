// Работа с атрибутами через встроенные и специальные свойства

// Подсветка активного пункта меню:
// У вас есть навигационное меню с несколькими пунктами (<a>). Добавьте логику на JavaScript, чтобы при клике на пункт меню он
//  подсвечивался, меняя свойство className.
let linkNav = document.querySelectorAll('.link-menu');
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', activeLink);
    function activeLink() {
        linkNav[i].className = 'link-menu-active'
    }
};
// Автоматическое исправление внешних ссылок:
// На вашем сайте есть внешние и внутренние ссылки. Используйте JavaScript, чтобы все внешние ссылки (начинающиеся с "http") открывались
// в новом окне (target="_blank").
let allLink = document.querySelectorAll('a');
console.log()
for (let i = 0; i < allLink.length; i++) {
    if (allLink[i].href.slice(0, 4) === 'http') {
        allLink[i].target = '_blank'
    }
};

// Заполнение формы данными пользователя:
// Есть форма с полями "Имя", "Фамилия" и "Email". Напишите функцию, которая заполняет эти поля данными пользователя из объекта.
let user = {
    name: 'Елена',
    surname: 'Кондрикова',
    email: 'shena3333@mail.ru'
};
// function addInfoToForm(user) {
//     let userName = document.querySelector('.user-name');
//     userName.textContent = user.name;
//     let userSurname = document.querySelector('.user-surname');
//     userSurname.textContent = user.surname;
//     let userEmail = document.querySelector('.user-email');
//     userEmail.textContent = user.email;
// }
// addInfoToForm()
// Валидация формы на клиенте:
// У вас есть форма регистрации с полями и кнопкой отправки. Поля должны иметь атрибуты required. Проверьте перед отправкой, что все 
// поля заполнены, иначе выведите предупреждение.

let inputForm = document.querySelectorAll('.input-form');
console.log(inputForm);
let checkReg = document.querySelector('.check-reg');
console.log(checkReg)
checkReg.addEventListener('click', check);
function check() {
    for (let i = 0; i < inputForm.length; i++) {
        if (inputForm[i].value == '') {
            alert(`Заполните поля регистрации: ${inputForm[i].placeholder}`)
        }
    }
}

// Динамическое создание списка с картинками:
// Используя массив объектов с данными картинок (например, URL и описание), создайте динамически список картинок с атрибутами src и alt.
let img = [{
    url: './img/clock.jpg',
    alt: "clock"
}, {
    url: './img/kvadro.png',
    alt: 'kvadro'
},];
let gallery = document.querySelector('.gallery');
let newImg = document.createElement('img');
newImg.className='image';
newImg.src=img[0].url;
newImg.alt=img[0].alt;
console.log (newImg);
gallery.insertAdjacentHTML("afterbegin",newImg);
gallery.insertAdjacentHTML("afterbegin",'<img src="./img/kvadro.png">')

//  Установка и получение атрибута
// Создайте HTML-страницу с кнопкой <button> и при помощи JavaScript задайте этой кнопке атрибут id со значением "myButton". После этого,
//  используя JavaScript, получите и выведите в консоль значение атрибута id этой кнопки.
//  Изменение стилей элемента
// Добавьте на страницу элемент <div> без стилей. С помощью JavaScript, установите для этого элемента стиль так, чтобы он имел красный
// цвет фона, черный цвет текста и ширину 200px. Все стили должны быть установлены через атрибут style с использованием JavaScript.
//  Работа с классами элемента
// Пусть на вашей странице есть список <ul> с несколькими элементами <li>. Ваша задача — написать функцию на JavaScript, которая будет
// добавлять класс "highlight" к элементу списка, когда пользователь наводит на него курсор, и удалять этот класс, когда курсор уходит
// с элемента. Для этого используйте свойства classList.add() и classList.remove().