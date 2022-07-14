import { useEffect, useState } from 'react';
import '../style/ItemHandler.css';

export const ItemHandler = () => {
  const defaultValue = 'Selecione uma opção';

  const [item, setItem] = useState('');
  const [select, setSelect] = useState('');
  const [aux, setAux] = useState(false);
  const [auxAdd, setAuxAdd] = useState(false); // Estado auxiliar específico para o botão 'Adicionar'
  const [auxRemove, setAuxRemove] = useState(false); // Estado auxiliar específico para o botão 'Remover'
  const [bottomText, setBottomText] = useState(defaultValue);

  // Função para lidar com o clique dos botôes 'Adicionar' e 'Remover'
  const handleClick = (e) => {
    if (e.target.innerHTML === 'Adicionar') {
      setSelect(item);
      setAuxAdd(true);
    } else if (e.target.innerHTML === 'Remover') {
      setSelect(item);
      setAuxRemove(true);
    }

    cleanInputBox();

    if (aux === false) {
      setAux(true);
    } else if (aux === true) {
      setAux(false);
    }
  }

  // Função para lidar com as mudanças no input
  const handleChange = (e) => {
    setItem(e.target.value);
  }

  // Função para criar <option>
  const createElement = (i) => {
    const selected = document.querySelector('.select');
    const arrayNodeList = [];

    selected.childNodes.forEach((node) => arrayNodeList.push(node.textContent));

    if (i === '') {
      window.alert('Adicione um item!');

      return;
    } else if (arrayNodeList.includes(i)) {
      window.alert('Não adicione um item repetido!');

      return;
    }

    const option = document.createElement('option');

    option.innerHTML = i;

    selected.appendChild(option);

    window.alert('Item adicionado com sucesso!');
  }

  // Função para remover uma <option>
  const removeElement = (i) => {
    const optionToDelete = document.querySelector('select');
    const arrayFromNodeList = Array.from(optionToDelete);
    const result = arrayFromNodeList.find((opt) => opt.innerHTML === i);

    if (result) {
      const index = arrayFromNodeList.indexOf(result);

      optionToDelete.remove(index);

      if (i !== '' && index) window.alert('Item removido com sucesso!');
    }
  }

  // Função para limpar o campo de input
  const cleanInputBox = () => {
    document.querySelector('input').value = '';

    setItem('');
  }

  const selectOption = (e) => {
    setBottomText(e.target.value);
  }

  // useEffect para 'ouvir' os estados auxiliares para renderização da adição ou subtração de <options>
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
      <select defaultValue={defaultValue} className='select' onChange={(e) => selectOption(e)}>
        <option value={defaultValue} disabled>{defaultValue}</option>
        <option>Opção 1</option>
      </select>
      <input placeholder='Insira um item' value={item} onChange={(e) => handleChange(e)} />
      <div className='button-container'>
        <button onClick={(e) => handleClick(e)}>Adicionar</button>
        <button onClick={(e) => handleClick(e)}>Remover</button>
        <button onClick={() => cleanInputBox()}>Limpar caixa</button>
      </div>
      <p>{bottomText}</p>
    </form>
  )
}
