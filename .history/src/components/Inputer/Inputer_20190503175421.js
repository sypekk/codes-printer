import React from 'react';
import styled from 'styled-components';

const StyledNumberInput = styled.input`
  width: 40px;
  margin-left: 10px;
`

const StyledInput = styled.input`
  font-size: 15px;
  padding: 2px;
  margin: 0px 10px;
`;

const Inputer = ({ changeFn, hideFn, addFn, exceptions, text, title, columns, ...props }) => (
  <div disabled={props.off ? true : false} className="App">
    <input placeholder='Wpisz nazwę sprzetu' name='title' onChange={changeFn} value={title} />
    <input placeholder='Wklej numery seryjne' name='text' type="text" onChange={changeFn} value={text} />
    <input placeholder='Dodaj wyjątek  (min 2 znaki)' name='exceptions' onChange={changeFn} value={exceptions} />
    <button onClick={addFn}>Dodaj</button>
    <button onClick={hideFn}>Ukryj</button>
    <label>
      Kolumny:
      <StyledNumberInput type='number' min='2' max='9' name='columns' onChange={changeFn} value={columns} />
    </label>

  </div>
)

export default Inputer;