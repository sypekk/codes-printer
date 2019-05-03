import React from 'React';
import styled from 'styled-components';
import Name from './../Name/Name';

const Table = (props) => (
  <>
    {props.list.map(items => (
      <>
        <Name key={items.item} title={items.title} />
        {items.serials.map(item => (
          <Serial key={item} serial={item} />
        )
        )}
      </>
    )
    )}
  </>
)



export default Table;