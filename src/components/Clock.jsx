import { useEffect, useState } from 'react';
import '../style/Clock.css';

export const Clock = () => {
  const [time, setTime] = useState('');

  const getTime = () => {
    const date = new Date();
    const current = date.toLocaleTimeString();

    setTime(current);
  }

  useEffect(() => {
    setTimeout(getTime, 1000);
  });

  return (
    <div className='clock-container'>{time}</div>
  )
}
