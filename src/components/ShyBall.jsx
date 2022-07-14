import '../style/ShyBall.css';

export const ShyBall = () => {
  const fleeRandomly = () => {
    const circle = document.querySelector('.circle');

    // circle.style.transform.translateY('200px');

    console.log(circle.style.transform);
  }

  return (
    <div className='shy-ball-container'>
      <div className='circle' onMouseEnter={() => fleeRandomly()}></div>
    </div>
  )
}
