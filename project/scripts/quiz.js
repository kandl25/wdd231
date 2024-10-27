document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            image: "images/ballet-barre.webp",
            question: "1. What is your favorite type of music?",
            options: [
                { answer: "Classical", danceStyle: "Ballet" },
                { answer: "Rap", danceStyle: "Hip-Hop" },
                { answer: "All Music", danceStyle: "Ballroom" },
                { answer: "Up-beat", danceStyle: "Jazz" }
            ]
        },
        {
            
            question: "2. Where do you find yourself dancing the most?",
            options: [
                { answer: "For friends and family", danceStyle: "Ballet" },
                { answer: "In public", danceStyle: "Hip-Hop" },
                { answer: "Around the house", danceStyle: "Ballroom" },
                { answer: "With a group of friends", danceStyle: "Jazz" }
            ]
        },
        {
            question: "3. What kind of dance moves do you enjoy?",
            options: [
                { answer: "Elegant and precise", danceStyle: "Ballet" },
                { answer: "Fast and sharp", danceStyle: "Hip-Hop" },
                { answer: "Smooth and rhythmic", danceStyle: "Ballroom" },
                { answer: "Energetic and free-form", danceStyle: "Jazz" }
            ]
        },
        {
            question: "4. How do you dress?",
            options: [
                { answer: "Vintage", danceStyle: "Ballet" },
                { answer: "Sporty", danceStyle: "Hip-Hop" },
                { answer: "Dressy", danceStyle: "Ballroom" },
                { answer: "Casual", danceStyle: "Jazz" }
            ]
        },{
            question: "5. Pick a color that draws you in.",
            options: [
                { answer: "Pink", danceStyle: "Ballet" },
                { answer: "Black", danceStyle: "Hip-Hop" },
                { answer: "Gold", danceStyle: "Ballroom" },
                { answer: "Purple", danceStyle: "Jazz" }
            ]
        },
        {
            question: "6. What is your favorite dance movie?",
            options: [
                { answer: "Center Stage", danceStyle: "Ballet" },
                { answer: "Step UP", danceStyle: "Hip-Hop" },
                { answer: "Shall We Dance", danceStyle: "Ballroom" },
                { answer: "Hairspray", danceStyle: "Jazz" }
            ]
        },
        {
            question: "7. How would you describe your room?",
            options: [
                { answer: "Neat and Tidy", danceStyle: "Ballet" },
                { answer: "Looks like a tornado hit", danceStyle: "Hip-Hop" },
                { answer: "In between not messy and not clean", danceStyle: "Ballroom" },
                { answer: "An 'organized' mess", danceStyle: "Jazz" }
            ]
        },
        {
            question: "8. It's Friday night at the end of a long week. What do you do?",
            options: [
                { answer: "Take a candle lit bath", danceStyle: "Ballet" },
                { answer: "Wherever the night takes you", danceStyle: "Hip-Hop" },
                { answer: "Take on the town with you friends", danceStyle: "Ballroom" },
                { answer: "Try something new", danceStyle: "Jazz" }
            ]
        },
        {
            question: "9. Which city would you like to live in?",
            options: [
                { answer: "New York", danceStyle: "Ballet" },
                { answer: "Los Angeles", danceStyle: "Hip-Hop" },
                { answer: "Miami", danceStyle: "Ballroom" },
                { answer: "Chicago", danceStyle: "Jazz" }
            ]
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');
    let currentQuestionIndex = 0;
    let answers = [];

    function loadQuestion() {
        const question = questions[currentQuestionIndex];
        quizContainer.innerHTML = `
            <img src="${question.image}" alt="${question.question}" style="width:500px; height:700px;">
            <h3>${question.question}</h3>
            <form id="quiz-form">
                ${question.options.map((option, index) => `
                    <label>
                        <input type="radio" name="answer" value="${option.danceStyle}" required>
                        ${option.answer}
                    </label><br>
                `).join('')}
            </form>
        `;
    }

    function displayResult() {
        const result = answers.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});

        const mostChosen = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);
        resultContainer.innerHTML = `Your dance style is: ${mostChosen}! <br><button id="retake-btn">Retake Quiz</button>`;
        document.getElementById('retake-btn').addEventListener('click', resetQuiz);
    }

    function resetQuiz(){
        currentQuestionIndex = 0;
        answers = [];
        resultContainer.innerHTML = '';
        loadQuestion();
    }

    submitBtn.addEventListener('click', function() {
        const form = document.getElementById('quiz-form');
        const selectedOption = form.elements['answer'].value;
        answers.push(selectedOption);

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            displayResult();
        }
    });

    loadQuestion();
});
