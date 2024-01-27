import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
width: 360px;
padding: 13px 20px;
justify-content: space-between;
align-items: center;

border-radius: 8px;
background: var(--Gray-White, #FFF);
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);   
border: none;

  color: #707070;

  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;
