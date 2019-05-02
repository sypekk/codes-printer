import React from 'react';
import styled from 'styled-components';

const NumberInputer = styled.input`
  width: 40px;
  margin-left: 10px;
`

const Inputer = ({ changeTextFn, hideFn, addFn, titleFn, columsFn, extceptionsFn, exceptions, text, title, columns, ...props }) => (
  <div disabled={props.off ? true : false} className="App">
    <input placeholder='Wpisz nazwę sprzetu' name='title' onChange={titleFn} value={title} />
    <input placeholder='Wklej numery seryjne' name='text' type="text" onChange={changeTextFn} value={text} />
    <input placeholder='Dodaj wyjątek' name='exceptions' onChange={extceptionsFn} value={exceptions} />
    <button onClick={addFn}>Dodaj</button>
    <button onClick={hideFn}>Ukryj</button>
    <label>
      Kolumny:
      <NumberInputer type='number' min='2' max='9' name='colums' onChange={columsFn} value={columns} />
    </label>

  </div>
)

export default Inputer;