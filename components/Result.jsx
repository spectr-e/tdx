const QuizResult = ({ score, total, tryAgain }) => {
  return (
    <>
      <div className='show-score'>
        Your Score:{score}
        <br />
        Total Score:{total}
      </div>
      <button id='next-button' onClick={tryAgain}>
        Try Again
      </button>
    </>
  )
}

export default QuizResult
