import { useEffect, useState } from 'react';
import '../style/ItemHandler.css';

export const ItemHandler = () => {
  const [item, setItem] = useState('');
  const [select, setSelect] = useState('');
  const [aux, setAux] = useState(false);

  const defaultValue = 'Selecione uma opção';

  const handleClick = async () => {
    setSelect(item);

    if (aux === false) {
      setAux(true);
    } else if (aux === true) {
      setAux(false);
    }
  }

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const createElement = (i) => {
    const selected = document.querySelector('.select');
    const option = document.createElement('option');

    option.innerHTML = i;

    selected.appendChild(option);
  }

  useEffect(() => {
    if (aux) {
      createElement(select);
      setAux(false);
    }
  }, [aux]);

  return (
    <form className='item-handler-container' onSubmit={(e) => e.preventDefault()}>
      <select defaultValue={defaultValue} className='select'>
        <option value={defaultValue} disabled>{defaultValue}</option>
        <option>Opção 1</option>
      </select>
      <input placeholder='Insira um item' value={item} onChange={(e) => handleChange(e)} />
      <div className='button-container'>
        <button onClick={() => handleClick()}>Adicionar</button>
        <button>Remover</button>
        <button>Limpar caixa</button>
      </div>
      <p></p>
    </form>
  )
}
