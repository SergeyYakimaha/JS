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
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

function deleteAdBlocks() {
    // const adBlocks = document.querySelector('.promo__adv');
    // adBlocks.remove();
    document.querySelector('.promo__adv').remove();
}

function changeGenre(ganre){
    // const genre = document.querySelector('.promo__genre');
    // genre.textContent = ganre;
    document.querySelector('.promo__genre').textContent = ganre;

}

function chageBackground() {
    // const promoBg = document.querySelector('.promo__bg');
    // promoBg.style.background = 'url("../img/bg.jpg") center center/cover no-repeat';
    document.querySelector('.promo__bg').style.background = 'url("../img/bg.jpg") center center/cover no-repeat';
}

function setPromoInteractiveList() {
    movieDB.movies.sort();
    movieDB.movies.forEach(function(element, index, array) {
        array[index] = `${index + 1}. ${element}`;    
    });

    document.querySelectorAll ('.promo__interactive-item'). forEach (el => el.remove ());
    
    const classDelete = '<div class="delete"></div>';
    movieDB.movies.forEach(function(element, index, array) {
        document.querySelector('.promo__interactive-list').insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${element} ${classDelete}</li> `);
    });    
}
   
deleteAdBlocks(); 
changeGenre('драма');
chageBackground();
setPromoInteractiveList();

