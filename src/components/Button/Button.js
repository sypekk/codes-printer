import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 15px;
  min-width: 50px;
  height: 24px;
  cursor: pointer;
  margin: 10px;
  padding: 0 10px;
`;

const Button = ({ children, fn, ...props }) => (
  <StyledButton onClick={fn}>
    {children}
  </StyledButton>
)

export default Button;