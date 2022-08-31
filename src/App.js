import React from 'react';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Hands from "./components/Hands";
import Contest from "./components/Contest";
import { useSelector } from 'react-redux';

function App() {
  const userHand = useSelector(state => state.game.userHand);

  return (
    <div className="app">
      <ScoreBoard />
      {userHand ? <Contest /> : <Hands />}
    </div>
  );
}

export default App;
