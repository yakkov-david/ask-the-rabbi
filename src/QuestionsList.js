// src/QuestionsList.js
import React from 'react';

const QuestionsList = ({ questions }) => {
  return (
    <ul>
      {questions.map((q, index) => (
        <li key={index}>
          <strong>Q:</strong> {q.question} <br />
          <strong>A:</strong> {q.answer}
        </li>
      ))}
    </ul>
  );
};

export default QuestionsList;
