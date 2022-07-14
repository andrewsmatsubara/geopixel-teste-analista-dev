import { useState } from 'react';
import '../style/ShyBall.css';

export const ShyBall = () => {
  const [coordinates, setCoordinates] = useState({});

  const fleeRandomly = async () => {
    const div = document.querySelector('.shy-ball-container');
    const circle = document.querySelector('.circle');
    const width = window.getComputedStyle(div).width.slice(0, -2);
    const height = window.getComputedStyle(div).height.slice(0, -2);
    const randomNumbers = await randomizeNumbers(width, height);

    setCoordinates(randomNumbers);

    circle.style.left = coordinates.x;
    circle.style.top = coordinates.y;
  }

  const randomizeNumbers = async (maxH, maxV) => {
    const horizontal = Math.round(Math.random() * maxH) * (Math.round(Math.random()) ? 1 : -1);
    const vertical = Math.round(Math.random() * maxV) * (Math.round(Math.random()) ? 1 : -1);;

    return { x: horizontal, y: vertical }
  }

  return (
    <div className='shy-ball-container'>
      <div className='circle' onMouseEnter={() => fleeRandomly()}></div>
    </div>
  )
}
