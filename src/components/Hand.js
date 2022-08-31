import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserHand } from '../slices/gameSlice';

const Hand = ({ value }) => {
    const dispatch = useDispatch();

    const pickHand = (e, value) => dispatch(setUserHand(value));

    return (
        <div className="hand" onClick={(e) => pickHand(e, value)}>
            <img src={`/images/icon-${value}.svg`} alt="Hand Value" />
        </div>
    )
};

export default Hand;