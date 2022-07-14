import { useEffect, useState } from 'react';
import '../App.css';

export const Clock = () => {
  const [time, setTime] = useState('');

  // Pega o tempo com horas, minutos e segundos e coloca dentro do estado 'time'
  const getTime = () => {
    const date = new Date();
    const current = date.toLocaleTimeString();

    setTime(current);
  }

  //setTimeOut para fazer com que a atualização do tempo ocorra a cada segundo
  useEffect(() => {
    setTimeout(getTime, 1000);
  });

  return (
    <div className='clock-container'>{time}</div>
  )
}
