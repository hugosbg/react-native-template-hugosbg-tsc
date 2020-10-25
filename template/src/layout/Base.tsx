import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  display: flex;
  flex: 1;
  margin: 0 auto;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`;

const Base: React.FC = ({ children }) => {
  return (
    <Root>
      {children}
    </Root>
  );
}

export default Base;
