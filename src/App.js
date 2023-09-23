/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

// src/App.js
import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import QuestionsList from './QuestionsList';

const mockAnswerQuestion = (question) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Answer for: ${question}`);
    }, 2000);
  });
};


function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = async (question) => {
    const newQuestion = { question, answer: 'Waiting for an answer...' };
  
    setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
  
    const answer = await mockAnswerQuestion(question);
  
    setQuestions(prevQuestions => {
      return prevQuestions.map((q) =>
        q.question === question ? { ...q, answer } : q
      );
    });
  };
  
  
  return (
    <div className="App">
      <h1>Ask the Rabbi</h1>
      <QuestionForm onSubmit={addQuestion} />
      <QuestionsList questions={questions} />
    </div>
  );
}

export default App;

