import React from 'react';
import styled from 'styled-components';


const StyledSerial = styled.div`
    font-family: "Libre Barcode 39 Text";
  font-size: 30px;
  padding: 10px 5px 5px;
  text-align: center;
  border-bottom: 1px solid black;
`;

const Serial = (props) => {
  const serial = props.serial.replace('ZONKZONKZONK', ' ');
  return (
    <div className='code'>{`*${serial}*`}</div>
  )
}

export default Serial;