import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { default as componentImg } from '../../asset/img/LoginImg.png';

export const Chat = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: '냥냥',
      chat: '여행 스타일을 자세히 말해주세... ',
      alarm: true,
    },
    {
      name: '설지원',
      chat: '이건 어떠세요..? ',
      alarm: false,
    },
    {
      name: '문주호',
      chat: '네 알겠습니다 !',
      alarm: false,
    },
    {
      name: '정태관',
      chat: '여행 일정을 알려주세요.',
      alarm: false,
    },
    {
      name: '이다한',
      chat: '주로 가고 싶은 관광지를 알려주세요 ㅎㅎ',
      alarm: false,
    },
    {
      name: '한태영',
      chat: '여행 계획을 진짜 어떻게 새울지 모르겠어요.',
      alarm: true,
    },
    {
      name: '테스트',
      chat: '상담 되나요??',
      alarm: false,
    },
    {
      name: '장예슬',
      chat: '이런 풍경 예쁜 곳도 있어요!',
      alarm: false,
    },
  ];
  const [page, setPage] = useState(-1);

  const [divList, setDivList] = useState([
    { me: true, text: '안녕하세요' },
    { me: true, text: '여행 계획을 짜고 싶어요!👋' },
    { me: false, text: '어떤 계획을 원하시나요!?' },
  ]);
  const [comment, setComment] = useState('');

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      setDivList([...divList, { me: true, text: comment }]);
      setComment('');
    }
  };
  useEffect(() => {
    console.log(divList);
  }, [divList]);
  // const createRandomDiv = () => {
  //   const randomTime = Math.floor(Math.random() * 5000) + 1000; // 1초에서 6초 사이의 랜덤한 시간
  //   setTimeout(() => {
  //     const newDivList = [...divList, <div key={Date.now()}>New Div</div>];
  //     setDivList(newDivList);
  //   }, randomTime);
  // };

  // useEffect(() => {
  //   document.addEventListener('keypress', handleKeyPress);
  //   return () => {
  //     document.removeEventListener('keypress', handleKeyPress);
  //   };
  // }, [divList]);

  return (
    <Container>
      {open && (
        <>
          {page === -1 ? (
            <OpneChat>
              <Title>채팅</Title>
              <ChatContainer>
                {data.map((v, idx) => (
                  <EachChat
                    alarm={v.alarm}
                    onClick={() => {
                      setPage(idx);
                      setDivList([...divList, { me: false, text: v.chat }]);
                    }}
                  >
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
          ) : (
            <OpneChat>
              <Exitcontainer>
                <NameConatiner>
                  <svg
                    onClick={() => setPage(-1)}
                    style={{ cursor: 'pointer' }}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.94141 10.9406C4.35547 11.5265 4.35547 12.4781 4.94141 13.064L13.9414 22.064C14.5273 22.65 15.4789 22.65 16.0648 22.064C16.6508 21.4781 16.6508 20.5265 16.0648 19.9406L8.12422 12L16.0602 4.05935C16.6461 3.47341 16.6461 2.52185 16.0602 1.93591C15.4742 1.34998 14.5227 1.34998 13.9367 1.93591L4.93672 10.9359L4.94141 10.9406Z"
                      fill="#0F75F8"
                    />
                  </svg>
                  <UserName>{data[page].name}</UserName>
                </NameConatiner>
                <MessageContainer>
                  <ChatDiv>
                    {divList.map((div, index) => (
                      <Chatqqq key={index} me={div.me}>
                        {div.text}
                      </Chatqqq>
                    ))}
                  </ChatDiv>
                </MessageContainer>
                <Input placeholder="메시지를 입력해주세요" onKeyDown={(e) => handleKeyPress(e)} value={comment} onChange={(e) => setComment(e.target.value)} />
              </Exitcontainer>
            </OpneChat>
          )}
        </>
      )}
      <ChatIcon onClick={() => setOpen(!open)}></ChatIcon>
    </Container>
  );
};
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 430px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ChatDiv = styled.div`
  color: var(--Gray-White, #fff);
  text-align: right;
  /* Regular 14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Chatqqq = styled.div`
  border-radius: 8px;
  padding: 4px 8px;
  width: fit-content;
  color: ${({ me }) => (!me ? '#333' : '#fff')};
  background: ${({ me }) => (!me ? 'var(--Gray-Gray-100, #F7F7F7)' : 'var(--Primary-Blue-Primary, #0f75f8)')};
  align-self: ${({ me }) => (me ? 'flex-end' : 'flex-start')};
`;
const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;
const NameConatiner = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Exitcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserName = styled.div`
  color: #000;

  /* SemiBold 16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
`;

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
          color: ${({ alarm }) => (alarm ? '#0f75f8' : '#666')};
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
