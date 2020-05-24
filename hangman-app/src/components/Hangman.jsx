import React, { useState } from 'react'
import './hangman.css'

import { randomWord } from './Words'

import step0 from '../images/0.jpg'
import step1 from '../images/1.jpg'
import step2 from '../images/2.jpg'
import step3 from '../images/3.jpg'
import step4 from '../images/4.jpg'
import step5 from '../images/5.jpg'
import step6 from '../images/6.jpg'

const Hangman = () => {

    const maxAttempts = 6
    const images = [step0, step1, step2, step3, step4, step5, step6]

    const [totalMistakes, setTotalMistakes] = useState(0);
    const [guessed, setGuessed] = useState(new Set([]))
    const [answer, setAnswer] = useState(randomWord())
    //const answer = randomWord()

    const gameOver = totalMistakes >= maxAttempts;

    const guessedWord = () => {
        return answer.split("").map(letter => (guessed.has(letter) ? letter : " _ "))
    }

    const generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button className="btn btn-large btn-secondary m-4"
                key={letter}
                value={letter}
                onClick={e => handleGuess(e)}
                disabled={guessed.has(letter)}>
                {letter}
            </button>
        ))
    }

    const handleGuess = (e) => {
        const letter = e.target.value;
        setGuessed(guessed.add(letter))
        if (!answer.includes(letter)) {
            setTotalMistakes(totalMistakes + 1)
        }
        guessedWord()
    }

    const resetButton = () => {
        setTotalMistakes(0)
        setAnswer(randomWord())
        setGuessed(new Set([]))
    }

    return (

        <div className="hangman container">
            <h1 className="text-center">Hangman</h1>
            <div className="float-right">Wrong Guesses : {totalMistakes} of {maxAttempts}</div>
            <div className="text-center">
                <img src={images[totalMistakes]} alt="Hangman image" />
            </div>
            <br />
            <div className="text-center">
                <p>Guess the programming language</p>
                <p>
                    {!gameOver ? guessedWord() : answer}
                </p>
                {generateButtons()}
                <button className="btn btn-info" onClick={resetButton}>Reset</button>
            </div>
        </div>
    )
}

export default Hangman
