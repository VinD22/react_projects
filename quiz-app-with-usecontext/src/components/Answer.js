import React from 'react'
import { SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_ERROR, SET_SHOW_RESULTS, SET_ANSWERS, RESET_QUIZ } from "../reducers/Types.js";

export default function Answer({ letter, answer, selected, dispatch }) {

    let classes = ['answer']

    if (selected) {
        classes.push('selected')
    }

    const handleClick = e => {
        dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: e.target.value })
        dispatch({ type: SET_ERROR, currentAnswer: "" })
    }

    return (
        <div>
            <button className={classes.join(' ')} value={letter} onClick={handleClick} dispatch={dispatch}>
                <span className="letter">{letter}</span> {answer}
            </button>
        </div>
    )
}
