import { useState } from 'react';
import '../style/ItemHandler.css';

export const ItemHandler = () => {
  const [item, setItem] = useState('');

  const defaultValue = 'Selecione uma opção';

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  return (
    <form className='item-handler-container' onSubmit={(e) => e.preventDefault()}>
      <select defaultValue={defaultValue}>
        <option value={defaultValue} disabled>{defaultValue}</option>
        <option>Opção 1</option>
      </select>
      <input placeholder='Insira um item' onChange={(e) => handleChange(e)} />
      <div className='button-container'>
        <button>Adicionar</button>
        <button>Remover</button>
        <button>Limpar caixa</button>
      </div>
      <p></p>
    </form>
  )
}
