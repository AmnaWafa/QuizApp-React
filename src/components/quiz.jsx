import { useState } from "react";
import Results from "./results";

function Quiz(){
    const questionBank = [
        {
            question: "What is the capital of Pakistan?",
            options: ['Mirpur', 'Lahore', 'Islamabad', 'Karachi'],
            answer: 'Islamabad',
        },
        {
            question: "Which language is used for web apps?",
            options: ['PHP', 'Python', 'JavaScript', 'All'],
            answer: 'All',
        },
        {
            question: "What does 'HTTP' stand for?",
            options: ['HyperText Transmission Protocol', 'High Transfer Text Protocol', 'HyperText Transfer Protocol', 'Home Transmission Text Program'],
            answer: 'HyperText Transfer Protocol',
        }
    ]
    const initialAnswers = [null, null, null]
    const [userAnswers, setUserAnswer] = useState(initialAnswers)
    const [isQuizCompleted, setIsQuizCompleted] = useState(false)

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const selectedOption = userAnswers[currentQuestion]

    function handleSelectedOption(option){
        const newUserAnswers = [...userAnswers]
        newUserAnswers[currentQuestion] = option;

        setUserAnswer(newUserAnswers);
    }

    function goToNext(){
        if(currentQuestion === questionBank.length -1){
            setIsQuizCompleted(true)
        }
        else{
        setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrev(){
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function RestartQuiz(){
        setCurrentQuestion(0)
        setIsQuizCompleted(false)
        setUserAnswer(initialAnswers)
    }
    
    if(isQuizCompleted){
        return(
            <Results userAnswers={userAnswers} questionBank={questionBank} RestartQuiz={RestartQuiz}/>
        )
    }
    return (
    <div> 
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option) => (
            <button className={'option' +(selectedOption === option ? ' selected' : '')} onClick={() => handleSelectedOption(option)}>{option}</button>
        ))}
        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={goToNext} disabled={!selectedOption}>
                {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
            </button>
        </div>
    </div>
    )
}

export default Quiz;