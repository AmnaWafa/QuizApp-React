import React from 'react'

export default function Results({userAnswers,questionBank,RestartQuiz}) {
    function CalcScore(userAnswers,questionBank){
        let finalScore = 0;
        for (let i = 0; i < questionBank.length; i++) {
            if(userAnswers[i]===questionBank[i].answer){
                finalScore++;
            }
        }
        return finalScore;
    }

    let score = CalcScore(userAnswers,questionBank);

  return (
    <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}/{questionBank.length} </p>
        <button className='restart-button' onClick={RestartQuiz}>Restart Quiz</button>
    </div>
  )
}
