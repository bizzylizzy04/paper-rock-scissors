import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComputerHand } from '../slices/gameSlice';
import './Contest.css';

const hands = ["Rock", "Paper", "Scissors"];

const Contest = () => {
    const dispatch = useDispatch();

    const userHand = useSelector((state) => state.game.userHand);
    const compHand = useSelector((state) => state.game.computerHand);

    useEffect(() => {
        let cpHand = hands[Math.floor(Math.random() * hands.length)];

        setTimeout(() => dispatch(setComputerHand(cpHand)), 500);
    }, []);

    return <div className="contest">
        <div className="contest__container">
            <div className="contest__handContainer">
                <h1>You picked</h1>
                    <div className="inner__circle">
                        <img src={`/images/icon-${userHand}.svg`} alt="User Hand" />
                </div>
            </div>
        </div>
    </div>;
};

export default Contest;