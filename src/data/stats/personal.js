import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1996-08-16T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(0));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },

  {
    key: 'location',
    label: 'Current city',
    value: 'Dhaka, Bangladesh',
  },
  {
    key: 'update',
    label: 'Website last updated',
    value: '30th November',
  },

];

export default data;
