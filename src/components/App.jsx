import React, { useState } from "react";
import Store from "../store";
import QuizItem from "./QuizItem.jsx";
import QuizProgress from "./QuizProgress.jsx";
import QuizResult from "./QuizResult.jsx";

function App() {
  const [results, setResults] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const selectAnswer = (id) => {
    Store.quiz.questions[currentQuestion].correct === id ? setResults(results + 1) : null;
    if (currentQuestion < Store.quiz.questions.length) setCurrentQuestion(currentQuestion + 1);
  };

  const currentWidth = `${(currentQuestion / Store.quiz.questions.length) * 100}%`;

  return (
    <main className='quiz'>
      {currentQuestion < Store.quiz.questions.length && (
        <>
          <h1 className='quiz__title'>
            {Store.quiz.title}
          </h1>
          <QuizProgress currentWidth={currentWidth} />
          <section className='quiz__wrap'>
            <QuizItem current={currentQuestion} chooseAnswer={selectAnswer} />
          </section>
        </>
      )}
      <QuizResult result={results} totalQuestions={Store.quiz.questions.length} show={currentQuestion >= Store.quiz.questions.length} />
    </main>
  );
}

export default App;
