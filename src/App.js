import React from 'react';
import EightBall from './EightBall';

const answers = [
  { msg: 'It is certain.', color: 'green' },
  // ... (add the rest of the answers)
];

const App = () => {
  return (
    <div className="app">
      <EightBall answers={answers} />
    </div>
  );
};

export default App;