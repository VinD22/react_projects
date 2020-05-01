import React from 'react'

export default function Answer({ letter, answer, selected, handleClick }) {

    let classes = ['answer']

    if (selected) {
        classes.push('selected')
    }

    return (
        <div>
            <button className={classes.join(' ')} value={letter} onClick={handleClick}>
                <span className="letter">{letter}</span> {answer}
            </button>
        </div>
    )
}
