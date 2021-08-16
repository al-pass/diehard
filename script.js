let lore = document.querySelector('.lore');
let rules = document.querySelector('.rules');
let stories = document.querySelector('.stories');
let graveyard = document.querySelector('.graveyard');
let infoSectionbg = document.querySelector('.info-popup-bg');
let infoSectiionTitle = document.querySelector('.info-section__title');
let infoSectiionDesc = document.querySelector('.info-section__desc');

lore.addEventListener('click', () => {
    infoSectionbg.classList.add('active');
});