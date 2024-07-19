'use client'
import React, { useState } from 'react'
import { data } from '@/assets/data/quiz'
import Result from './Result'
import '@/assets/styles/quiz.css'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [clickedOption, setClickedOption] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const changeQuestion = () => {
    updateScore()
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setClickedOption(0)
    } else {
      setShowResult(true)
    }
  }
  const updateScore = () => {
    if (clickedOption === data[currentQuestion].answer) {
      setScore(score + 1)
    }
  }
  const resetAll = () => {
    setShowResult(false)
    setCurrentQuestion(0)
    setClickedOption(0)
    setScore(0)
  }
  return (
    <div>
      <p className='heading-txt'>Quiz APP</p>
      <div className='contain'>
        {showResult ? (
          <Result score={score} total={data.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className='question'>
              <span id='question-number'>{currentQuestion + 1}. </span>
              <span id='question-txt'>{data[currentQuestion].question}</span>
            </div>
            <div className='option-container'>
              {data[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    // className="option-btn"
                    className={`option-btn ${
                      clickedOption == i + 1 ? 'checked' : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
            <input
              type='button'
              value='Next'
              id='next-button'
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Quiz
