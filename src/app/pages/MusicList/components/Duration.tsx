import React from 'react';

type IDurationProps = {
  ms: number;
};

export const Duration: React.FC<IDurationProps> = ({ ms }) => {
  const msToMinAndSecs = (value: number) => {
    const minutes: number = Math.floor(value / 60000);
    const seconds: number = Number(((value % 60000) / 1000).toFixed(0));
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return <p>{msToMinAndSecs(ms)}</p>;
};
