let lore = document.querySelector('.lore');
let rules = document.querySelector('.rules');
let stories = document.querySelector('.stories');
let graveyard = document.querySelector('.graveyard');
let infoSection = document.querySelector('.info-popup');
let infoSectionbg = document.querySelector('.info-popup-bg');
let infoSectiionTitle = document.querySelector('.info-popup__title');
let infoSectiionDesc = document.querySelector('.info-popup__desc');


function hidePopup() {
    infoSection.classList.remove('active');
    infoSectionbg.classList.remove('active');
};

lore.addEventListener('click', () => {
    infoSectiionTitle.textContent = "Тайтл лора";
    infoSectiionDesc.textContent = "Описание лора на сколько угодно текста, жедательно не много разве что";
    infoSectionbg.classList.add('active');
    infoSection.classList.add('active');
});

rules.addEventListener('click', () => {
    infoSectiionTitle.textContent = "Тайтл Правила";
    infoSectiionDesc.textContent = "Описание правил на сколько угодно текста, жедательно не много разве что";
    infoSectionbg.classList.add('active');
    infoSection.classList.add('active');
});

stories.addEventListener('click', () => {
    infoSectiionTitle.textContent = "Тайтл историй";
    infoSectiionDesc.textContent = "Описание историй на сколько угодно текста, жедательно не много разве что";
    infoSection.classList.add('active');
    infoSectionbg.classList.add('active');
});

graveyard.addEventListener('click', () => {
    infoSectiionTitle.textContent = "Тайтл кладбище";
    infoSectiionDesc.textContent = "Описание кладбище на сколько угодно текста, жедательно не много разве что";
    infoSection.classList.add('active');
    infoSectionbg.classList.add('active');
    document.querySelector('.info-section__read-button').setAttribute('href', 'index.html');
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === infoSectionbg) { // Если цель клика - фот, то:
        infoSectionbg.classList.remove('active'); // Убираем активный класс с фона
        infoSection.classList.remove('active'); // И с окна
    }
});