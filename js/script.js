//Добавление линий на фоне
const linesContainer = document.querySelector('.main__lines');
let widthContainer = Math.floor(document.querySelector('.container').offsetWidth / 60);

function createLines() {
    linesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых элементов
    for (let i = 0; i < widthContainer; i++) {
        const line = document.createElement('li');
        line.classList.add('line');
        linesContainer.appendChild(line);
    }
}

createLines(); 

window.addEventListener('resize', function() {
    widthContainer = Math.floor(document.querySelector('.container').offsetWidth / 60);
    createLines(); 
});


//Выбор ответа
const answerInputs = document.querySelectorAll('.answer-input');
const answerLabels = document.querySelectorAll('.answer-label');

answerInputs.forEach((input, index) => {
    input.addEventListener('change', () => {
        // Сбросить цвет фона у всех label
        answerLabels.forEach((label) => {
            label.style.backgroundColor = '#e7eaf3'; // Стандартный цвет фона
        });
        // Установить цвет фона только у выбранного label
        if (input.checked) {
            answerLabels[index].style.backgroundColor = '#e9acba';
        }
    });
});

//Подсказка
function openForm() {
    document.getElementById("popup").style.display = "block";
}
function closeForm() {
    document.getElementById("popup").style.display = "none";
}

//Проверка ответа
const answerButton = document.querySelector('.answer-button');
const answerContainer = document.querySelector('.main__content');

answerButton.addEventListener('click', () => {
    let selectedAnswer = '';
    answerInputs.forEach((input, index) => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });
    // Проверяем правильность ответа
    if (selectedAnswer === 'A') {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('block');
        answerContainer.appendChild(answerDiv);
        answerDiv.textContent = 'Right answer!!!';
        document.getElementById("answer").style.display = "none";
    } else {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('block');
        answerContainer.appendChild(answerDiv);
        answerDiv.textContent = 'Wrong answer :(';
        document.getElementById("answer").style.display = "none";
    }
});