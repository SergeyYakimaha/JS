/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      formAdd = document.querySelector('.add');


adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

fillFilmsList();

function fillFilmsList() {
    movieList.innerHTML = "";

    movieDB.movies.forEach((film, i) => {
        
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete" index=${i}></div>
            </li>
        `;
    }); 
    
    addEventsDelete();
}

function addEventsDelete() {
    movieList.querySelectorAll('.delete').forEach(function(elem) {
        elem.addEventListener('click', deleteFilm);
    });     
}

formAdd.querySelector('button').addEventListener('click', addFilm);
formAdd.querySelector('input[type="checkbox"').addEventListener('click', likeFilm);

function addFilm(event) {
    event.preventDefault();
    
    const input = formAdd.querySelector('input');
    
    let filmName = (input.value.length > 21) ? input.value.slice(0, 21) + '...' : input.value;

    movieDB.movies.push(filmName);
    movieDB.movies.sort();

    fillFilmsList();
}

function deleteFilm(event) {
    let index = event.target.getAttribute('index');
    
    movieDB.movies.splice(index, 1);
    movieDB.movies.sort(); 
    
    fillFilmsList();
}

function likeFilm(event) {
    if (event.target.checked) {
        console.log('Добавляем любимый фильм');
    }
}