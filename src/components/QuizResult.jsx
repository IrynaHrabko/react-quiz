// QuizResult.jsx
import React from 'react';

function QuizResult({ result, totalQuestions, show }) {
  return (
    <section className={`quiz__result ${show ? '--show' : ''}`}>
      <h3 className="quiz__summary">
        Ви відповіли правильно на {result} із {totalQuestions} запитань
      </h3>
    </section>
  );
}

export default QuizResult;
