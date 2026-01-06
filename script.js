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

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];

    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!');
    } else {
        console.log('Falsche Antwort!');
    }
}