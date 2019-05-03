import React from 'react';
import styled from 'styled-components';


const Serial = (props) => {
  const serial = props.serial.replace('ZONKZONKZONK', ' ');
  return (
    <div className='code'>{`*${serial}*`}</div>
  )
}

export default Serial;