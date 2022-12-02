import React from 'react';

import './index.css';

const Score = ({ value = 3 }: { value?: string | number }) => {
  const getBorderColor = () => {
    if (value >= 7) {
      return 'border-green-400';
    } else if (value > 4 && value < 7) {
      return 'border-yellow-400';
    } else {
      return 'border-red-400';
    }
  };

  return (
    <span
      className={`score text-center rounded-full px-3 py-2 mx-2 bg-black bg-opacity-75 border-4 ${getBorderColor()}`}
    >
      {Math.round(Number(value))}
    </span>
  );
};

export default Score;
