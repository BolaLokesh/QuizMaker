import React, { useState } from 'react';
import axios from 'axios';

function QuizForm() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: ['', '', '', ''], correctAnswer: '' }]);

  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = async () => {
    const quiz = { title, questions };
    await axios.post('http://localhost:8080/api/quizzes', quiz, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    alert('Quiz created!');
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Quiz Title" />
      {questions.map((q, index) => (
        <div key={index}>
          <input
            value={q.text}
            onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
            placeholder="Question"
          />
          {q.options.map((opt, i) => (
            <input
              key={i}
              value={opt}
              onChange={(e) => {
                const newOptions = [...q.options];
                newOptions[i] = e.target.value;
                handleQuestionChange(index, 'options', newOptions);
              }}
              placeholder={`Option ${i + 1}`}
            />
          ))}
          <input
            value={q.correctAnswer}
            onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
            placeholder="Correct Answer"
          />
        </div>
      ))}
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
}

export default QuizForm;
