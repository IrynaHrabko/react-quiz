// QuizProgress.jsx
import React from 'react';

function QuizProgress({ currentWidth }) {
  return (
    <div className="quiz__progress">
      <div style={{ width: currentWidth }} className="quiz__progress-inner"></div>
    </div>
  );
}

export default QuizProgress;
