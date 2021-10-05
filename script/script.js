let lore = document.querySelector('.lore');
let rules = document.querySelector('.rules');
let stories = document.querySelector('.stories');
let graveyard = document.querySelector('.graveyard');
let infoSection = document.getElementById('info-section');
let infoSectionbg = document.querySelector('.info-section-bg');
let infoSectiionTitle = document.querySelector('.info-section__title');
let infoSectiionDesc = document.querySelector('.info-section__desc');


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
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});




function renderRandomElement(story) {
    textField.textContent = story;
}
/*Show random story on the screen */
function getRandomInt(currentArr) {
    let random = 0;

    do {
        random = Math.floor(Math.random() * JSON.stringify(currentArr).match(/"\d":{"story":/g).length);
    } while (random === getRandomInt);
    return random;
}

/*get rand number based on quantity of graveyard stories which is not empty. If it's empty rewrites obj again*/
function rewriteObject(obj) {
    currentStoryArr = Object.assign({}, obj);
    emptyElements = [];
}
/**/
function isObjectEmpty(obj) {
    const someArr = [];
    const elementsQuantity = JSON.stringify(obj).match(/"\d":{"story":/g).length;
    /*we stringnify and match to array object currentStoryArr in order count elements of currentStoryArr*/
    let quantityOfEmptyElements = 0;
    for (let i = 0; i < elementsQuantity; i++) {
        console.log('number is: ' + i);
        console.log(currentStoryArr[i].story.length);

        if (currentStoryArr[i].story.length === 0) {
            console.log('hooray');
            emptyElements.push(i);
            quantityOfEmptyElements++;
            console.log('quantityOfEmptyElements: ' + quantityOfEmptyElements);
            console.log('emptyElements: ' + emptyElements);
        }
    }
    (quantityOfEmptyElements === elementsQuantity) ?
    true: false;
}
/*get rand number based on quantity of graveyard stories which is not empty. If it's empty rewrites obj again*/

function areObjectsSame(obj1, obj2) {
    JSON.stringify(obj1) === JSON.stringify(obj2) ?
        true :
        false;
}

function getRandomElement(originalobj) {
    if (isObjectEmpty(currentStoryArr) || !areObjectsSame(originalobj, currentStoryArr)) { rewriteObject(originalobj) }
    console.log(currentStoryArr);
    let elementPosition = getRandomInt(currentStoryArr);
    let story = currentStoryArr[elementPosition].story;
    renderRandomElement(story);

    currentStoryArr[elementPosition].story = '';
}

buttonGetRandomStory.addEventListener('click', () => { getRandomElement(graveyardStories) });