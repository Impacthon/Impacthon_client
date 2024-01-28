import { useState } from "react";
import styled from "styled-components";
import { default as componentImg } from "../../asset/img/LoginImg.png";

export const Chat = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: "홍길동",
      chat: "여행 스타일을 자세히 말해주세... 10분",
      alarm: true,
    },
    {
      name: "설지원",
      chat: "이건 어떠세요..? ",
      alarm: false,
    },
    {
      name: "문주호",
      chat: "네 알겠습니다 !",
      alarm: false,
    },
    {
      name: "홍길동",
      chat: "여행 스타일을 자세히 말해주세... 10분",
      alarm: false,
    },
    {
      name: "홍길동",
      chat: "여행 스타일을 자세히 말해주세... 10분",
      alarm: false,
    },
    {
      name: "홍길동",
      chat: "여행 스타일을 자세히 말해주세... 10분",
      alarm: true,
    },
    {
      name: "홍길동",
      chat: "여행 스타일을 자세히 말해주세... 10분",
      alarm: false,
    },
    {
      name: "홍길동",
      chat: "여행 스타일을 자세히 말해주세... 10분",
      alarm: false,
    },
  ];
  return (
    <Container>
      {open && (
        <OpneChat>
          <Title>채팅</Title>
          <ChatContainer>
            {data.map((v) => (
              <EachChat alarm={v.alarm}>
                <div>
                  <img src={componentImg} />
                  <div>
                    <p>{v.name}</p>
                    <p>{v.chat}</p>
                  </div>
                </div>
                {v.alarm && <Alarm />}
              </EachChat>
            ))}
          </ChatContainer>
        </OpneChat>
      )}
      <ChatIcon onClick={() => setOpen(!open)}></ChatIcon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  bottom: 50px;
  left: 45%;
  color: white;
  z-index: 10;
  width: fit-content;
  height: fit-content;
`;
const ChatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #0a40de;
  cursor: pointer;
  z-index: 100;
`;

const OpneChat = styled.div`
  z-index: 10;
  padding: 20px 30px;
  background-color: white;
  display: flex;
  width: 300px;
  height: 500px;
  right: 0px;
  bottom: 70px;
  position: absolute;
  border-radius: 20px;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.25);
  color: black;
  flex-direction: column;
`;

const Title = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  overflow-y: auto;
`;

const EachChat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
  cursor: pointer;
  > div {
    display: flex;
    gap: 15px;
    align-items: center;
    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 3px;
      > p {
        color: #000;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        margin: 0;
        &:nth-child(2) {
          color: ${({ alarm }) => (alarm ? "#0f75f8" : "#666")};
        }
      }
    }
  }
`;

const Alarm = styled.div`
  width: 5px;
  height: 5px;
  background-color: #0f75f8;
  border-radius: 50%;
`;
