/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Одержимость",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Скотт Пилигрим против...",
        ]
    };

    const promo = document.querySelector('.promo__adv');
    const img = promo.querySelectorAll('img');
    const genre = document.querySelector('.promo__genre');
    const bg = document.querySelector('.promo__bg');
    const interactiveList = document.querySelector('.promo__interactive-list');
    const activeBtn = document.querySelector('.promo__menu-item_active');

    //1
    img.forEach(element => {
        element.remove()
    });

    //2
    genre.innerHTML = 'драма';

    //3
    bg.style.backgroundImage = `url('../img/bg.jpg')`;
    //4


    const sortArr = (arr) => arr.sort();
    const deleteEl = (e) => e.target.remove();

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            })
        })
    }

    activeBtn.addEventListener('click', deleteEl);

    createMovieList(movieDB.movies, interactiveList);
    // -----------------------Отработка слушателей событий---------------------//

    //1
    const addForm = document.querySelector('.add');
    const addInput = addForm.querySelector('input.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, interactiveList);
        }

        e.target.reset();
    })
})





