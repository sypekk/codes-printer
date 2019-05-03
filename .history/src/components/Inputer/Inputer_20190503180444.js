import React from 'react';
import styled from 'styled-components';
import Button from './../Button/Button';


const StyledNumberInput = styled.input`
  width: 40px;
  margin-left: 10px;
`

const StyledInput = styled.input`
  font-size: 15px;
  padding: 2px;
  margin: 0px 10px;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Inputer = ({ changeFn, hideFn, addFn, exceptions, text, title, columns, ...props }) => (
  <Wrapper disabled={props.off ? true : false} >
    <StyledInput placeholder='Wpisz nazwę sprzetu' name='title' onChange={changeFn} value={title} />
    <StyledInput placeholder='Wklej numery seryjne' name='text' type="text" onChange={changeFn} value={text} />
    <StyledInput placeholder='Dodaj wyjątek  (min 2 znaki)' name='exceptions' onChange={changeFn} value={exceptions} />
    <Button onClick={addFn}>Dodaj</Button>
    <Button onClick={hideFn}>Ukryj</Button>
    <label>
      Kolumny:
      <StyledNumberInput type='number' min='2' max='9' name='columns' onChange={changeFn} value={columns} />
    </label>

  </Wrapper>
)

export default Inputer;