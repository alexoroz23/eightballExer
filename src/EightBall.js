import React, { useState } from 'react';

const EightBall = ({ answers }) => {
  const [ballState, setBallState] = useState({
    color: 'black',
    message: 'Think of a Question',
  });

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setBallState({ color, message: msg });
  };

  const resetBall = () => {
    setBallState({ color: 'black', message: 'Think of a Question' });
  };

  return (
    <div
      className="eight-ball"
      style={{ backgroundColor: ballState.color }}
      onClick={ballState.color === 'black' ? getRandomAnswer : resetBall}
    >
      {ballState.message}
    </div>
  );
};

export default EightBall;