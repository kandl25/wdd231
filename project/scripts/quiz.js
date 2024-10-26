const questions = [
    {
        question: "What dance style is known for its quick, sharp movements and intricate footwork?",
        answers: {
            a: "Ballet",
            b: "Tap Dance",
            c: "Jazz",
            d: "Hip Hop"
        },
        correctAnswer: "b"
    },
    {
        question: "Which dance originated in Cuba and is characterized by its sensual hip movements and rhythmic footwork?",
        answers: {
            a: "Salsa",
            b: "Tango",
            c: "Waltz",
            d: "Flamenco"
        },
        correctAnswer: "a"
    },
    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = "";

    for (const key in question.answers) {
        const answer = question.answers[key];
        const button = document.createElement("button");
        button.textContent = answer;
        button.value = key;
        button.addEventListener("click", checkAnswer);
        answersElement.appendChild(button);
    }
}

function checkAnswer(event) {
    const selectedAnswer = event.target.value;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect!";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.textContent = "Quiz completed!";
    answersElement.innerHTML = "";
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    submitButton.style.display = "none";
}

displayQuestion();