import styled from "styled-components";
import Header from "../header";
import MainComponents from "./mainComponent";
import { SearchIcon } from "react-router-dom";
import { ProfileList } from "../constance";

const Main = () => {
  return (
    <>
      <Container>
        <Title>“로픽, 여행 계획이 고민이라면?”</Title>
        <SubTitle>
          바쁜 직장인을 위한 일반인 현지 가이드 매칭 서비스! <br />
          키워드로 손쉽게원하는 여행을 계획하고 현지인의 눈으로 특별한 경험을
          만나보세요.
        </SubTitle>
        <SearchLayer>
          <Input placeholder="어떤 여행을 원하시나요?" />
        </SearchLayer>
        <MainLayer>
          {ProfileList.map((item, idx) => (
            <MainComponents key={idx} {...item} />
          ))}
        </MainLayer>
      </Container>
    </>
  );
};

const SearchLayer = styled.div`
  display: flex;
`;
const HashLayer = styled.div`
  display: flex;
  text-align: center;
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

const MainLayer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
`;
const Container = styled.div`
  padding: 0 160px;
`;

const Input = styled.input`
  display: flex;
  width: 60%;
  padding: 14px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #0a40de;
  background: #fefefe;
  outline: none;
  margin-top: 50px;
  margin-bottom: 52px;
`;

const SubTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  margin-top: 16px;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 900;
`;
export default Main;
