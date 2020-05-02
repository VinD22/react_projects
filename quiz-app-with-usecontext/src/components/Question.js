import React, { useContext } from 'react'

import QuizContext from "../context/QuizContext"
export default function Question() {

    const { state, dispatch } = useContext(QuizContext)
    const { currentQuestion, questions } = state;
    const question = questions[currentQuestion]


    return (
        <div>
            <h1>{question.question}</h1>
        </div>
    )
}
