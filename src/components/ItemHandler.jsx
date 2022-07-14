import { useEffect, useState } from 'react';
import '../style/ItemHandler.css';

export const ItemHandler = () => {
  const [item, setItem] = useState('');
  const [select, setSelect] = useState('');
  const [aux, setAux] = useState(false);
  const [auxAdd, setAuxAdd] = useState(false);
  const [auxRemove, setAuxRemove] = useState(false);

  const defaultValue = 'Selecione uma opção';

  const handleClick = async (e) => {
    if (e.target.innerHTML === 'Adicionar') {
      setSelect(item);
      setAuxAdd(true);
    } else if (e.target.innerHTML === 'Remover') {
      setSelect(item);
      setAuxRemove(true);
    }

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
    const arrayNodeList = [];

    selected.childNodes.forEach((node) => arrayNodeList.push(node.textContent));

    console.log(arrayNodeList);

    if (i === '' || arrayNodeList.includes(i)) return;

    const option = document.createElement('option');

    option.innerHTML = i;

    selected.appendChild(option);
  }

  const removeElement = (i) => {
    const optionToDelete = document.querySelector('select');
    const arrayFromNodeList = Array.from(optionToDelete);
    const result = arrayFromNodeList.find((opt) => opt.innerHTML === i);
    const index = arrayFromNodeList.indexOf(result);

    optionToDelete.remove(index)
  }

  const cleanInputBox = () => {
    document.querySelector('input').value = '';
  }

  useEffect(() => {
    if (aux && auxAdd) {
      createElement(select);
      setAux(false);
      setAuxAdd(false);
    }
  }, [aux, auxAdd]);

  useEffect(() => {
    if (aux && auxRemove) {
      removeElement(select);
      setAux(false);
      setAuxRemove(false);
    }
  }, [aux, auxRemove]);

  return (
    <form className='item-handler-container' onSubmit={(e) => e.preventDefault()}>
      <select defaultValue={defaultValue} className='select'>
        <option value={defaultValue} disabled>{defaultValue}</option>
        <option>Opção 1</option>
      </select>
      <input placeholder='Insira um item' value={item} onChange={(e) => handleChange(e)} />
      <div className='button-container'>
        <button onClick={(e) => handleClick(e)}>Adicionar</button>
        <button onClick={(e) => handleClick(e)}>Remover</button>
        <button onClick={() => cleanInputBox()}>Limpar caixa</button>
      </div>
      <p></p>
    </form>
  )
}
