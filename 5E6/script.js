const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which is the largest planet in the Solar System?",
        answers: ["Earth", "Jupiter", "Saturn", "Mars"],
        correct: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correct: 0
    },
    {
        question: "What is the smallest ocean in the world?",
        answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < quizData.length) {
        const questionData = quizData[currentQuestion];
        document.getElementById("question-text").textContent = questionData.question;

        const answerButtons = document.querySelectorAll(".answer-btn");
        answerButtons.forEach((btn, index) => {
            btn.textContent = questionData.answers[index];
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestion].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function endQuiz() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").textContent = score;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("question-container").style.display = "block";
    document.getElementById("score-container").style.display = "none";
    loadQuestion();
}

// Start the quiz
loadQuestion();
