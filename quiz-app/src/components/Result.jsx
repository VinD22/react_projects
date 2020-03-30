import React from "react";

const Result = ({ score, playAgain }) => {
    return (
        <div className="score-board">
            <div className="score">You scored {score} / 5 correct answers!</div>
            <div className="playBtn" onClick={playAgain}>Play Again!</div>
        </div>
    )
}

export default Result;