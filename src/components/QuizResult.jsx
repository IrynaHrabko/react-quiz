// QuizResult.jsx
import React from 'react';

function QuizResult({ result, totalQuestions, show, onReload }) {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <section className={`quiz__result ${show ? '--show' : ''}`}>
      <h3 className="quiz__summary">
        Ви відповіли правильно на {result} із {totalQuestions} запитань
      </h3>
      <button onClick={onReload}>Пройти квіз повторно</button>
    </section>
  );
}

export default QuizResult;
