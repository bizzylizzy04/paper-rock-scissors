import React from 'react';
import Hand from "./Hand";
import "./Hands.css";

const Hands = () => {
    return (
        <div className="hands">
            <div className="hands__triangle">
                <img src="/images/bg-triangle.svg" alt="Triangle" />
            </div>
            <div className="hands__top">
                <div id="paper__outer__circle">
                    <div className="inner__circle">
                        <Hand value="Paper" />
                    </div>
                </div>
                <div id="scissors__outer__circle">
                    <div className="inner__circle">
                        <Hand value="Scissors" />
                    </div>
                </div>
            </div>
            <div className="hands__bottom">
                <div id="rock__outer__circle">
                    <div className="inner__circle">
                        <Hand value="Rock" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hands;