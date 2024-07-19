'use client'
import Flashcard from './Flashcard'
import '@/assets/styles/flashcard.css'

const FlashcardList = ({ flashcards }) => {
  return (
    <div className='card-grid boddy'>
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}

export default FlashcardList
