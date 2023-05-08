import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizzes } from '../hooks/useQuizzes';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState([]);

    const { allQuizzes } = useQuizzes();
    useEffect(() => {
        setQuizzes(allQuizzes);
    }, [allQuizzes]);
    return (
        <QuizContext.Provider value={{ quizzes, setQuizzes }}>
            {children}
        </QuizContext.Provider>
    );
};
