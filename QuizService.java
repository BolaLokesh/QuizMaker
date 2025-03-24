package com.example.quizmaker.service;

import com.example.quizmaker.model.Quiz;
import com.example.quizmaker.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {
    @Autowired
    private QuizRepository quizRepository;

    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public Quiz findById(Long id) {
        return quizRepository.findById(id).orElse(null);
    }

    public List<Quiz> findAll() {
        return quizRepository.findAll();
    }
}
