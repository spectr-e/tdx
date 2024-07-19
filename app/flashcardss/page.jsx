'use client'
import React, { useState, useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { FaMoon } from 'react-icons/fa'
import { FlashcardList } from '@/components'

const FlashcardsPage = () => {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])
  const [theme, setTheme] = useState('light')

  const categoryEl = useRef()
  const amountEl = useRef()

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.trivia_categories)
      })
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://opentdb.com/api.php')
      .then((res) => res.json())
      .then((data) => {
        setFlashcards(
          data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer)
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeString(a)),
              answer,
            ]

            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            }
          })
        )
      })
  }

  return (
    <>
      <form className='header' onSubmit={handleSubmit}>
        <button className='theme-toggle-btn' onClick={() => themeToggler()}>
          <FaMoon />
        </button>
        <h1 className='title'>Flashcard Trivia Quiz.</h1>
        <div className='form-group'>
          <label htmlFor='category'>Category</label>
          <select id='category' ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Number of Questions</label>
          <input
            type='number'
            id='amount'
            min='1'
            step='1'
            defaultValue={10}
            ref={amountEl}
          />
        </div>
        <div className='bg-black form-group'>
          <button className='btn'>Generate</button>
        </div>
      </form>
      <div className='container'>
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  )
}

export default FlashcardsPage
