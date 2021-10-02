(function() {
    const popup = document.querySelector('.info-popup');
    const popupBg = document.querySelector('.info-popup-bg');
    const popupTitle = document.querySelector('.info-popup__title');
    const popupDesc = document.querySelector('.info-popup__desc');
    const popupImg = document.querySelector('.info-popup__img');

    const popupCloseButton = popup.querySelector('.info-popup__close-button');
    const mainScreeButtons = Array.from(document.querySelectorAll('.info-blocks__main-sections-buttons'));
    const mainScreenTopicsInfo = [{
            class: 'lore',
            title: 'Лор',
            desc: 'Описание лора на сколько угодно текста, жедательно не много разве что',
            img: 'open_book_by__breezy__d19k2v-pre.jpg'
        },
        {
            class: 'rules',
            title: 'Правила',
            desc: 'Описание правил на сколько угодно текста, жедательно не много разве что',
            img: 'open_book_by__breezy__d19k2v-pre.jpg'
        },
        {
            class: 'stories',
            title: 'Истории',
            desc: 'Описание истории на сколько угодно текста, жедательно не много разве что',
            img: 'open_book_by__breezy__d19k2v-pre.jpg'
        },
        {
            class: 'graveyard',
            title: 'Кладбище',
            desc: 'Описание кладбище на сколько угодно текста, жедательно не много разве что',
            img: 'open_book_by__breezy__d19k2v-pre.jpg'
        }
    ];
    const arrOfClasses = mainScreenTopicsInfo.map(function(item) {
        return item.class;
    });

    document.addEventListener("click", (e) => {
        if (mainScreeButtons.indexOf(e.target) != -1) {
            console.log(e.target.classList[0]);
            const currentArrIndex = arrOfClasses.indexOf(e.target.classList[0]);
            console.log(mainScreenTopicsInfo[currentArrIndex].title);
            console.log(mainScreenTopicsInfo[currentArrIndex].desc);
            console.log(`../../images/${mainScreenTopicsInfo[currentArrIndex].img}`);
            popupTitle.textContent = mainScreenTopicsInfo[currentArrIndex].title;
            popupDesc.textContent = mainScreenTopicsInfo[currentArrIndex].desc;
            popupImg.src = `../../images/${mainScreenTopicsInfo[currentArrIndex].img}`;
            openPopup();
        }
    })

    function openPopup() {
        popupBg.classList.add('active');
        popup.classList.add('active');
        document.addEventListener('mouseup', closeByClick);
        document.addEventListener('keydown', closeByEscape);
    }

    function closePopup() {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        document.removeEventListener('mouseup', closeByClick);
        document.removeEventListener('keydown', closeByEscape);
    };


    function closeByClick(e) {
        if (e.target === popupBg || e.target === popupCloseButton) {
            closePopup()
        }
    };

    function closeByEscape(e) {
        if (e.key === 'Escape') {
            closePopup()
        }
    };
})();