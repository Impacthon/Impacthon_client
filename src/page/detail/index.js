import styled from "styled-components";
import { default as componentImg } from "../main/componentImg.svg";
import { Tag } from "../../common/tag";

export const Detail = () => {
  return (
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
        <div>
          <Image src={componentImg} />
          <InfoContainer>
            <Info>
              <p>김한비</p>
              <p>|</p>
              <p>여행객</p>
            </Info>
            <TitleContent>목포 맛집잘알</TitleContent>
            <TagCOntainer>
              <Tag tag="맛집" />
              <Tag tag="여행 계획 대신 짜 드립니다" />
              <Tag tag="여행지 추천" />
            </TagCOntainer>
          </InfoContainer>
        </div>
        <Content>
          안녕하십니까 목포의 아들! 김한비 입니다 저의 키는 155 mm 이고, 집가고
          싶습니다! 안녕하십니까 목포의 아들! 김한비 입니다 저의 키는 155 mm
          이고, 집가고 싶습니다! 안녕하십니까 목포의 아들! 김한비 입니다 저의
          키는 155 mm 이고, 집가고 싶습니다! 안녕하십니까 목포의 아들! 김한비
          입니다 저의 키는 155 mm 이고, 집가고 싶습니다! 안녕하십니까 목포의
          아들! 김한비 입니다 저의 키는 155 mm 이고, 집가고 싶습니다!
          안녕하십니까 목포의 아들! 김한비 입니다 저의 키는 155 mm 이고, 집가고
          싶습니다! 안녕하십니까 목포의 아들! 김한비 입니다 저의 키는 155 mm
          이고, 집가고 싶습니다! 안녕하십니까 목포의 아들! 김한비 입니다 저의
          키는 155 mm 이고, 집가고 싶습니다! 안녕하십니까 목포의 아들! 김한비
          입니다 저의 키는 155 mm 이고, 집가고 싶습니다! 안녕하십니까 목포의
          아들! 김한비 입니다 저의 키는 155 mm 이고, 집가고 싶습니다!
          안녕하십니까 목포의 아들! 김한비 입니다 저의 키는 155 mm 이고, 집가고
          싶습니다! 안녕하십니까 목포의 아들! 김한비 입니다 저의 키는 155 mm
          이고, 집가고 싶습니다! 안녕하십니까 목포의 아들! 김한비 입니다 저의
          키는 155 mm 이고, 집가고 싶습니다! 안녕하십니까 목포의 아들! 김한비
          입니다 저의 키는 155 mm 이고, 집가고 싶습니다! 안녕하십니까 목포의
          아들! 김한비 입니다 저의 키는 155 mm 이고, 집가고 싶습니다!{" "}
        </Content>
      </MainLayer>
    </Container>
  );
};

const TagCOntainer = styled.div`
  display: flex;
  gap: 3px;
`;
const Content = styled.p`
  color: #000;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  line-height: 160%;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 160px;
`;

const SubTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  margin-top: 16px;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 900;
`;

const SearchLayer = styled.div`
  display: flex;
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

const MainLayer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;
  > div {
    display: flex;
    gap: 30px;
  }
`;

const Image = styled.img`
  width: 400px;
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  > p:nth-child(2) {
    color: #999;
  }
  > p:last-child {
    color: #0a40de;
  }
`;

const TitleContent = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
`;
