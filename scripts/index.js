"use strict";

const quiz = document.querySelector('.quiz');
const warning = document.querySelector('.warning');
const btnNext = document.querySelector('.quiz__next-btn');
let userScore = 0;
let count = 0;

if (typeof questions !== 'undefined' && questions.length > 0) {
    quiz.classList.remove('hidden');
    showQuestions(count)
} else {
    warning.classList.remove('hidden');
}

function showQuestions(index){
    const title = document.querySelector('.quiz__title');
    const list = document.querySelector('.quiz__list');
    const total = document.querySelector('.quiz__total');
    let progress = document.querySelector('.quiz__progress-inner');

    title.innerHTML = `${questions[index].question}`;
    list.innerHTML = '';
    questions[index].options.forEach(item => {
        const text = `<li class="quiz__option">${item}</li>`;
        list.insertAdjacentHTML('beforeend', text);
    });

    const options = list.querySelectorAll('.quiz__options');
    options.forEach(item => item.setAttribute('onclick', 'optionSelected(this)'));

    total.innerHTML = `${index + 1} of ${questions.length}`;
    progress.style.width = `${Math.round( ((index + 1) / questions.length ) * 100)}%`;
}