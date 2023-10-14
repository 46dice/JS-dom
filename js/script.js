/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Одержимость",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Скотт Пилигрим против...",
    ]
};

//1
const promo = document.querySelector('.promo__adv');
const img = promo.querySelectorAll('img');
img.forEach(element => {
    element.remove()

});

//2
const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'драма';

//3
const bg = document.querySelector('.promo__bg');
bg.style.backgroundImage = `url('../img/bg.jpg')`;

//4
const interactiveList = document.querySelector('.promo__interactive-list');
interactiveList.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    interactiveList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});;

// interactiveList.push(...movieDB.movies.sort())



