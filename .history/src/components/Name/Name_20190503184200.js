import React from 'react';
import styled from 'styled-components';


const StyledName = styled.div`
    padding: 15px 5px 5px;
    text-align: center;
    font-size: 15px;
    border-bottom: 1px solid black;
`;

const Name = (props) => (
  <StyledName>{props.title}</StyledName>
)


export default Name;