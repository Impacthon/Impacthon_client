import styled from "styled-components";
import { default as logo } from "../header/logo.svg";
import { useNavigate } from "react-router-dom";
import { default as price } from "../header/Price.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate("/main")} src={logo} alt="" />
      <Div>
        {/* <LoginBtn onClick={()=>{navigate("/login")}} >로그인</LoginBtn>
        <SignUpBtn onClick={()=>navigate("/signup")}>회원가입</SignUpBtn> */}
        <Info>김한비 | 여행객</Info>
        <img src={price} />
        <Money>2000</Money>
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
  margin-top: 10px;
`;

const Info = styled.div`
  display: flex;
  color: #0a40de;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  margin-top: 12px;
  margin-right: 30px;
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
`;

const Div = styled.div`
  display: flex;
  margin-left: auto;
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
