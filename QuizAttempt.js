import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function QuizAttempt() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await axios.get(`http://localhost:8080/api/quizzes/${id}`);
      setQuiz(response.data);
    };
    fetchQuiz();
  }, [id]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    let score = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) score++;
    });
    alert(`Your score: ${score}/${quiz.questions.length}`);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div>
      <h2>{quiz.title}</h2>
      {quiz.questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.options.map((opt, i) => (
            <label key={i}>
              <input
                type="radio"
                name={`question-${q.id}`}
                value={opt}
                onChange={() => handleAnswerChange(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default QuizAttempt;
