import styled from "styled-components";
import { default as line } from "../main/Line.svg";
import { default as componentImg } from "../main/componentImg.svg";
import { default as price } from "../header/Price.svg";
const MainComponents = ({ myname, gender, introduce, tag }) => {
  return (
    <Container>
      <img src={componentImg} />
      <Div>
        <Name>{myname}</Name>
        <img src={line} />
        <Gender>{gender}</Gender>

        <MoneyLayer>
          <img src={price} />
          <Money>1000</Money>
        </MoneyLayer>
      </Div>
      <Introduce>{introduce}</Introduce>
      <HashLayer>
        <HashTag>{tag}</HashTag>
      </HashLayer>
    </Container>
  );
};

const MoneyLayer = styled.div`
  display: flex;
`;
const Money = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  margin-top: 3px;
`;

const HashLayer = styled.div`
  display: flex;
`;
const HashTag = styled.div`
  display: flex;
  padding: 0 10px;
  height: 30px;
  flex-direction: column;
  border-radius: 8px;
  background: #f7f7f7;
  align-items: flex-start;
  width: 55px;
  justify-content: center;
  color: #0a40de;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  margin-top: 20px;
`;

const Container = styled.div`
  margin-right: auto;
  background: #ffff;
  height: 350px;
  border-radius: 8px;
  &:hover {
    background: #f7f7f7;
    transition: all 0.3s;
  }
`;

const Introduce = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 160%;
  margin-top: 6px;
`;
const MainImg = styled.img``;
const Div = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
const Name = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
`;
const Gender = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: #0a40de;
`;

export default MainComponents;
