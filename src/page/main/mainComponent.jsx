import styled from "styled-components";
import { default as line } from "../main/Line.svg";
import { default as componentImg } from "../main/componentImg.svg";

const MainComponents = () => {
  return (
    <Container>
      <MainImg src={componentImg} />
      <Div>
        <Name>김한비</Name>
        <LineIcon src={line} />
        <Gender>여</Gender>
      </Div>
      <Introduce>목포 맛집잘알</Introduce>
      <HashLayer>
        <HashTag>#목포</HashTag>
      </HashLayer>
    </Container>
  );
};

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

const LineIcon = styled.img``;
const Introduce = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 160%;
  margin-top: 6px;
`;
const Container = styled.div`

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
`;

export default MainComponents;
