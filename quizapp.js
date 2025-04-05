document.addEventListener("DOMContentLoaded", () => {
  // Questions.
  const questions = [
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      correctAnswer: 1, // Index of "Pacific Ocean"
      category: "Geography",
      difficulty: "easy",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correctAnswer: 2, // Index of "Mars"
      category: "Science",
      difficulty: "easy",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      correctAnswer: 2, // Index of "Leonardo da Vinci"
      category: "Art",
      difficulty: "medium",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correctAnswer: 2, // Index of "Tokyo"
      category: "Geography",
      difficulty: "easy",
    },
    {
      question: "Which language is used primarily for Android app development?",
      options: ["Swift", "JavaScript", "Kotlin", "C#"],
      correctAnswer: 2, // Index of "Kotlin"
      category: "Technology",
      difficulty: "medium",
    },
  ];

  // grab elements
  const questionContainer = document.querySelector(".question-container");
  const resultContainer = document.querySelector(".result-container");
  const startBtn = document.querySelector(".quiz-start-btn");
  const nextBtn = document.querySelector(".next-btn");

  const questionText = document.querySelector(".question h2");
  const choicesList = document.querySelector(".choices-list");

  let currentQsIdx = 0;
  let currentScore = 0;

  startBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");

    showQs();
  }

  function showQs() {
    nextBtn.classList.add("hidden");
    questionText.textContent = `
      Qs. ${questions[currentQsIdx].question}
    `;

    choicesList.innerHTML = ""; // clear previous choices.
    questions[currentQsIdx].options.forEach((option) => {
      const listItem = document.createElement("li");
      const label = document.createElement("label");
      const input = document.createElement("input");

      input.type = "radio";
      input.name = `question-${currentQsIdx}`;
      input.value = option;

      label.htmlFor = input.id;
      label.textContent = option;

      label.prepend(input);
      listItem.appendChild(label);
      choicesList.appendChild(label);

      input.addEventListener("click", () => selectAns(option));
    });
  }

  function selectAns(option) {
    const correctAns = questions[currentQsIdx].correctAnswer;
    const selectedAns = questions[currentQsIdx].options.indexOf();

    if (selectedAns === correctAns) {
      currentScore++;
    }

    console.log(selectedAns);
  }

  function showChoices() {}

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
  }
});
