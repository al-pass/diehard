const buttonGetRandomStory = document.querySelector('#get-random-story-button');
const textField = document.querySelector('.main-topics__main-text');
const graveyardStories = [{
        story: 'Story number 1'
    },
    {
        story: 'Story number 2'
    },
    {
        story: 'Story number 3'
    },
    {
        story: 'Story number 4'
    },
    {
        story: 'Story number 5'
    },
    {
        story: 'Story number 6'
    },
];

let currentStoryArr = graveyardStories.slice();

function getRandomStory(currentArr) {
    random = Math.floor(Math.random() * JSON.stringify(currentArr).match(/{"story":"Story number \d"}/g).length);
    return random;
}

function isArrEmpty(obj) {
    if (obj.length === 0) {
        return true;

    }
}

function rewriteObject(rewriteWhat) {
    currentStoryArr = rewriteWhat.slice();
}

renderRandomElement = (story) => {
    textField.textContent = story;
}

function deleteUsedString(arr, elementToDelete) {
    arr.splice(elementToDelete, 1);
    return arr;

}

function getRandomElement(originalArr) {
    if (isArrEmpty(currentStoryArr)) { rewriteObject(originalArr, currentStoryArr); }
    let elementPosition = getRandomStory(currentStoryArr);
    let story = currentStoryArr[elementPosition].story;
    renderRandomElement(story);
    deleteUsedString(currentStoryArr, elementPosition)
}

buttonGetRandomStory.addEventListener('click', () => { getRandomElement(graveyardStories) });