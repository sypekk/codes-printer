import React from 'react';
import Name from './../Name/Name';
import Serial from './../Serial/Serial';
import styled from 'styled-components';

const StyledRow = styled('div')`
    display: grid;
    grid-template-columns: repeat(${(props) => props.number}, 1fr);
    grid-template-rows: repeat(auto - fill, 1fr);
    border-bottom: 1px solid black;
    text-align: center;
`;

const Table = (props) => (
  <>
    {props.list.map(items => (
      <StyledRow number={props.columns}>
        <Name key={items.item} title={items.title} index={items.index} />
        {items.serials.map(item => (
          <Serial key={item} serial={item} />
        )
        )}
      </StyledRow>
    )
    )}
  </>
)

export default Table;