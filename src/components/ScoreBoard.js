import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = () => {
    return (
        <div className="scoreboard">
            <div className="scoreboard__gameName">
                <div className="scoreboard__text">
                <img src="/images/logo.svg" alt="Rock Paper Scissors Logo" />
                </div>
            </div>
            <div className="scoreboard__score">
                <p>Score</p>
                <h1>12</h1>
            </div>
        </div>
    )
}

export default ScoreBoard;