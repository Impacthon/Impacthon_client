import React from 'react';
import styled from 'styled-components';

const Point = () => {
  return (
    <Background>
      <PointContainer>

      </PointContainer>
    </Background>
  );
};

export default Point;

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f7f8fa;
`;

export const PointContainer = styled.div`
  width: 500px;
  height: 650px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
`;
