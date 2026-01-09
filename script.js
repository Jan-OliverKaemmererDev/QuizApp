// JSON Array
let questions = [
    {
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Jackie Chan",
    "answer_2": "Ip-Man",
    "answer_3": "Tim Bernes-Lee",
    "answer_4": "Bruce-Lee",
    "right_answer": 3
    },

    {
    "question": "Welches Videospiel-Franchise ist bekannt für den Klempner Mario?",
    "answer_1": "Sonic the Hedgehog",
    "answer_2": "Super Mario",
    "answer_3": "The Legend of Zelda",
    "answer_4": "Kirby",
    "right_answer": 2
    },

    {
    "question": "Was bewirkt der Befehl 'console.log()' in JavaScript?",
    "answer_1": "Er löscht die gesamte Festplatte.",
    "answer_2": "Er erstellt eine neue HTML-Datei.",
    "answer_3": "Er gibt Text oder Variablen in der Konsole aus.",
    "answer_4": "Er ändert die Hintergrundfarbe der Website.",
    "right_answer": 3
    },

    {
    "question": "Was ist die Lieblingsbeschäftigung eines Programmierers, wenn der Code nicht funktioniert?",
    "answer_1": "Den Monitor ganz lieb streicheln.",
    "answer_2": "Stundenlang auf den Bildschirm starren und hoffen, dass es sich von selbst löst.",
    "answer_3": "Den Computer mit Weihwasser besprühen.",
    "answer_4": "Sport treiben und gesund essen.",
    "right_answer": 2
    },

    {
    "question": "Was bedeutet die Abkürzung 'RPG' im Gaming-Bereich?",
    "answer_1": "Rocket Propelled Grenade",
    "answer_2": "Role-Playing Game",
    "answer_3": "Rapid Play Guide",
    "answer_4": "Real Player Group",
    "right_answer": 2
    }
];

let correctQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('./sounds/success.mp3');
let AUDIO_FAIL = new Audio('./sounds/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion(){
    if(gameIsOver()) {
        showEndscreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(rightAnswerSelected(selectedQuestionNumber, question)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        correctQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }

    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question){
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
    nextQuestionCounter();
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function nextQuestionCounter(){
    const questionCounter = document.getElementById('question-counter');
    questionCounter.textContent = Number(questionCounter.textContent) + 1;
}

function restartGame(){
    document.getElementById('header-image').src = './img/brain.jpg';
    document.getElementById('question-body').style = ''; // question-body wieder anzeigen
    document.getElementById('end-screen').style = 'display: none'; // Endscreen ausblenden
    correctQuestions = 0;
    currentQuestion = 0;
    document.getElementById('question-counter').innerHTML = 1;
    init();
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showEndscreen(){
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-correct-questions').innerHTML = correctQuestions;
    document.getElementById('header-image').src = './img/win.png';
}