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

function showQuestions(index) {
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

    const options = list.querySelectorAll('.quiz__option');
    options.forEach(item => item.setAttribute("onclick", "optionSelected(this)"));

    total.innerHTML = `${index + 1} of ${questions.length}`;
    progress.style.width = `${Math.round(((index + 1) / questions.length) * 100)}%`;
}

function optionSelected(answer) {
    const userAnswer = answer.textContent;
    const correctAnswer = questions[count].answer;
    const options = document.querySelectorAll('.quiz__option');
    const iconCorrect = '<span>&#10004;</span>';
    const iconWrong = '<span>&#9940;</span>';

    if (userAnswer === correctAnswer) {
        userScore += 1;
        answer.classList.add('correct');
        answer.insertAdjacentHTML('beforeend', iconCorrect);
    } else {
        answer.classList.add('incorrect');
        answer.insertAdjacentHTML('beforeend', iconWrong);

        options.forEach(item => {
            if(item.textContent === correctAnswer) {
                setTimeout(() => {
                    item.classList.add('correct');
                    item.insertAdjacentHTML('beforeend', iconCorrect);
                }, 100);
            }
        });
        options.forEach(item => item.classList.add('disabled'));
    }
}