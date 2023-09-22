// src/QuestionForm.js
import React, { useState } from 'react';

const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question);
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask a question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button type="submit">Ask</button>
    </form>
  );
};

export default QuestionForm;
