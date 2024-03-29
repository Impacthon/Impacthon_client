import React, { useState, useEffect } from 'react';
import { Input } from '../../common/Input/style';
import { Button } from '../../common/button/style';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idValid, setIdNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [changePw, setChangePw] = useState('password');

  const navigate = useNavigate();

  const handleName = (e) => {
    setId(e.target.value);
    const regex = /^.{3,16}$/;
    if (regex.test(id)) {
      setIdNameValid(true);
    } else {
      setIdNameValid(false);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = new RegExp(/^.{7,16}$/);
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SIGNIN_API}/login`, null, {
        params: {
          user_id:  id,
          password,
        },
      });
      localStorage.setItem('accessToken', data);
      navigate('/');
    } catch (e) {
      alert('올바른 아이디와 비밀번호를 입력해주세요.');
    }
  };

  const checkPassword = (e) => {
    if (changePw === 'password') {
      setChangePw('text');
    } else setChangePw('password');
  };
  useEffect(() => {
    if (idValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, passwordValid]);
  return (
    <Background>
      <SigninContainer>
        <ComponentsContainer>
          <Title>Log In</Title>
          <InputContainer>
            <InputContainer>
              <DataContainer>
                <InputText>아이디</InputText>
                <Input type="text" value={id} onChange={handleName} placeholder="아이디를 입력해주세요." />
              </DataContainer>
              <DataContainer>
                <InputText>비밀번호</InputText>
                <Input type={changePw} maxlength="16" value={password} onChange={handlePassword} placeholder="비밀번호를 입력해주세요." />
                <Icon onClick={checkPassword}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <g clip-path="url(#clip0_50_112)">
                      <path
                        d="M12.0009 1.33331C8.63424 1.33331 5.93841 2.86665 3.97591 4.69165C2.02591 6.49998 0.721745 8.66665 0.105078 10.1541C-0.0324219 10.4833 -0.0324219 10.85 0.105078 11.1791C0.721745 12.6666 2.02591 14.8333 3.97591 16.6416C5.93841 18.4666 8.63424 20 12.0009 20C15.3676 20 18.0634 18.4666 20.0259 16.6416C21.9759 14.8291 23.2801 12.6666 23.9009 11.1791C24.0384 10.85 24.0384 10.4833 23.9009 10.1541C23.2801 8.66665 21.9759 6.49998 20.0259 4.69165C18.0634 2.86665 15.3676 1.33331 12.0009 1.33331ZM18.0009 10.6666C18.0009 13.9791 15.3134 16.6666 12.0009 16.6666C8.68841 16.6666 6.00091 13.9791 6.00091 10.6666C6.00091 7.35415 8.68841 4.66665 12.0009 4.66665C15.3134 4.66665 18.0009 7.35415 18.0009 10.6666ZM12.0009 7.99998C12.0009 9.47081 10.8051 10.6666 9.33425 10.6666C8.85508 10.6666 8.40508 10.5416 8.01758 10.3166C8.00924 10.4333 8.00091 10.5458 8.00091 10.6666C8.00091 12.875 9.79258 14.6666 12.0009 14.6666C14.2092 14.6666 16.0009 12.875 16.0009 10.6666C16.0009 8.45831 14.2092 6.66665 12.0009 6.66665C11.8842 6.66665 11.7676 6.67081 11.6509 6.68331C11.8717 7.07081 12.0009 7.52081 12.0009 7.99998Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_50_112">
                        <rect width="24" height="21.3333" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Icon>
              </DataContainer>
            </InputContainer>
          </InputContainer>
          <Button onClick={handleLogin}>로그인</Button>
          <SignupContainer>
            <SignupText>계정이 없으신가요?</SignupText>
            <StyledLink to="/signup">회원가입</StyledLink>
          </SignupContainer>
        </ComponentsContainer>
      </SigninContainer>
    </Background>
  );
};

export default Signin;

export const Background = styled.div`
  height: 100vh;
  background: var(--Gray-Gray-50, gray);
  display: grid;
  justify-content: center;
  align-items: center;
  place-items: center;
  overflow-y: hidden;
`;

export const SigninContainer = styled.div`
  width: 500px;
  height: 600px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0);
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 45px;
`;

export const Title = styled.p`
  color: #000;
  font-family: 'Pretendard';
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px; /* 75% */
  margin: 0;
`;

export const InputContainer = styled.div`
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
`;

export const InputText = styled.p`
  color: #212121;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;

export const Icon = styled.div`
  position: absolute;
  top: 33px;
  right: 20px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 1120px;
  height: 1084px;
  flex-shrink: 0;

  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  filter: blur(5px);
`;

export const SignupContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const SignupText = styled.p`
  color: var(--Gray-Black, #000);

  /* Regular 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const StyledLink = styled(Link)`
  color: var(--Primary-Blue-Primary, #0f75f8);
  text-align: center;
  /* Regular 16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  margin: 0;
  text-decoration-line: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
