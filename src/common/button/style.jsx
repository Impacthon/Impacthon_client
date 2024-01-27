import styled from 'styled-components';

export const Button = styled.button`
  /* margin-top: 16px; */
  display: flex;
width: 400px;
padding: 11px 24px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
border-radius: 8px;
background: var(--Foundation-LP_Blue-Normal, #0A40DE);

border: none;

color: var(--Gray-White, #FFF);
text-align: center;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 160%; /* 25.6px */
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;