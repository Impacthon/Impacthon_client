import styled from 'styled-components';
import { default as logo } from '../header/logo.svg';
import { useNavigate } from 'react-router-dom';
import { default as price } from '../header/Price.svg';

const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');

  return (
    <Container>
      <Logo onClick={() => navigate('/main')} src={logo} alt="" />
      <Div>
        {token ? (
          <>
            <Info>
              <p>김한비</p>
              <p>| </p>
              <p>여행객</p>
            </Info>
            <img src={price} />
            <Money>2000</Money>
          </>
        ) : (
          <>
            <LoginBtn
              onClick={() => {
                navigate('/login');
              }}
            >
              로그인
            </LoginBtn>
            <SignUpBtn onClick={() => navigate('/signup')}>회원가입</SignUpBtn>
          </>
        )}
      </Div>
    </Container>
  );
};

const Money = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  > p {
    margin: 0;
    word-break: keep-all;
  }
  > p:nth-child(2) {
    color: #999;
  }
  > p:last-child {
    color: #0a40de;
  }
`;

const Logo = styled.img``;

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(158, 158, 158, 0.25);
  height: 50px;
  padding: 16px 160px;
  display: flex;
  text-align: center;
  margin-bottom: 61px;
  width: calc(100vw - 320px);
`;

const Div = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 10px;
`;

const LoginBtn = styled.button`
  border-radius: 6px;
  border: 1px solid #0a40de;
  padding: 14px 14px 14px 18px;
  justify-content: center;
  align-items: center;
  color: #0a40de;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  font-family: Pretendard;
  margin-right: 20px;
  &:hover {
    background-color: #0a40de;
    color: #fff;
  }
`;

const SignUpBtn = styled.button`
  border-radius: 6px;
  border: 1px solid #0a40de;
  padding: 14px 14px 14px 18px;
  justify-content: center;
  align-items: center;
  color: #0a40de;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  font-family: Pretendard;
  &:hover {
    background-color: #0a40de;
    color: #fff;
  }
`;
export default Header;
