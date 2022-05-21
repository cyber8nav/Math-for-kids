// variables
const answers = document.querySelectorAll(".content__answers>li");
const burgerMenu = document.querySelector(".burger-menu");
const burgerNavigation = document.querySelector(".burger-navigation");
let answer = 0;

//functions
function generateAnEquation() {
    const min = 0;
    const max = 100;
    let firstNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    let secondNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    if(firstNumber>=secondNumber){
        firstNumber = firstNumber;
        secondNumber = secondNumber;
    }else{
        const p = firstNumber;
        firstNumber = secondNumber;
        secondNumber = p;
    }
    document.querySelector("#num1").innerText = firstNumber;
    document.querySelector("#num2").innerText = secondNumber;

    generateAnswers(firstNumber, secondNumber);
}

function generateAnswers(firstNumber, secondNumber) {
    const min = 0;
    const max = 100;
    let wrongAnswer1 = Math.floor(Math.random() * (max + 1 - min) + min);
    let wrongAnswer2 = Math.floor(Math.random() * (max + 1 - min) + min);
    answer = firstNumber - secondNumber;
    while (wrongAnswer2 == wrongAnswer1 || wrongAnswer1 == answer || wrongAnswer2 == answer) {
        wrongAnswer1 = Math.floor(Math.random() * (max + 1 - min) + min);
        wrongAnswer2 = Math.floor(Math.random() * (max + 1 - min) + min);
    }
    const allTheAnswers = [answer, wrongAnswer1, wrongAnswer2];
    shuffleAnArray(allTheAnswers);
    answers[0].innerText = allTheAnswers[0];
    answers[1].innerText = allTheAnswers[1];
    answers[2].innerText = allTheAnswers[2];
}

function shuffleAnArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function addTheClass(element, className) {
    element.classList.add(className);
}

function removeTheClass(element, className) {
    element.classList.remove(className);
}

generateAnEquation();

// event listeners
answers[0].addEventListener("click", (event) => {
    if (answers[0].innerHTML == answer) {
        generateAnEquation();
    } else {
        addTheClass(event.target, "wrong-answer");
        setTimeout(removeTheClass, 500, event.target, "wrong-answer");
    }
});

answers[1].addEventListener("click", (event) => {
    if (answers[1].innerHTML == answer) {
        generateAnEquation();
    } else {
        addTheClass(event.target, "wrong-answer");
        setTimeout(removeTheClass, 500, event.target, "wrong-answer");
    }
});

answers[2].addEventListener("click", (event) => {
    if (answers[2].innerHTML == answer) {
        generateAnEquation();
    } else {
        addTheClass(event.target, "wrong-answer");
        setTimeout(removeTheClass, 500, event.target, "wrong-answer");
    }
});

burgerMenu.addEventListener("click", () => {
    burgerNavigation.classList.toggle("appearance");
    burgerMenu.classList.toggle("close");
});
