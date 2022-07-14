import '../style/ShyBall.css';

export const ShyBall = () => {

  // Função para adicionar atributos de CSS ao círculo baseado em números aleatórios criados pela função randomizeNumbers
  const fleeRandomly = async () => {
    const div = document.querySelector('.shy-ball-container');
    const circle = document.querySelector('.circle');
    const width = window.getComputedStyle(div).width.slice(0, -2);
    const height = window.getComputedStyle(div).height.slice(0, -2);
    const randomNumbers = await randomizeNumbers(width, height);

    circle.style.transition = '1s ease';
    circle.style.transform = `translate(${randomNumbers.x}px, ${randomNumbers.y}px)`;
  }

  // Função para transformar 2 números aleatórios em um objeto com os respectivos valores
  const randomizeNumbers = async (maxH, maxV) => {
    const horizontal = Math.round(Math.random() * maxH - 50) * (Math.round(Math.random()) ? 1 : -1) / 2;
    const vertical = Math.round(Math.random() * maxV - 50) * (Math.round(Math.random()) ? 1 : -1) / 2;

    return { x: horizontal, y: vertical }
  }

  return (
    <div className='shy-ball-container'>
      <div className='circle' onMouseEnter={() => fleeRandomly()}></div>
    </div>
  )
}
