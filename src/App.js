import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Mumbai", isCorrect: false },
        { id: 1, text: "New Delhi", isCorrect: true },
        { id: 2, text: "Gujarat", isCorrect: false },
        { id: 3, text: "Punjab", isCorrect: false },
      ],
    },
    {
      text: "In which year was the Constitution of India written?",
      options: [
        { id: 0, text: "1947", isCorrect: false },
        { id: 1, text: "1948", isCorrect: false },
        { id: 2, text: "1949", isCorrect: true },
        { id: 3, text: "1961", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of India?",
      options: [
        { id: 0, text: "Sarvepalli Radhakrishnan", isCorrect: true },
        { id: 1, text: "Dr. Rajendra Prasad", isCorrect: false },
        { id: 2, text: "Zakir Husain Khan", isCorrect: false },
        { id: 3, text: "Pranab Mukherjee", isCorrect: false },
      ],
    },
    {
      text: "When Indian national Anthem was first sung??",
      options: [
        { id: 0, text: "1947", isCorrect: false },
        { id: 1, text: "1857", isCorrect: false },
        { id: 2, text: "1911", isCorrect: true },
        { id: 3, text: "None of the Above", isCorrect: false },
      ],
    },
    {
      text: "Where did the formation of Azad Hind Fauj take Place?",
      options: [
        { id: 0, text: "Thailand", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: false },
        { id: 2, text: "Singapore", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1 className= "Ind">India Quiz In</h1>

      {/* 2. Current Score  */}
      <h2 className= "Sco">Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2 className="ques">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul className="opt">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;