import React from 'react';
import styled from 'styled-components';


const StyledName = styled.div`
    font-size: 17px;
    padding: 15px 0px;
    font-family: Arial, Helvetica, sans-serif;
    
`;

const Name = (props) => (
  <StyledName>{`${props.index}. ${props.title}`}</StyledName>
)

export default Name;