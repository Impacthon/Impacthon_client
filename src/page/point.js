import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Point = () => {
  const nav = useNavigate();
  return (
    <Container>
      <A>
        <div>
          <Logo>
            <svg
              width="70"
              height="37"
              viewBox="0 0 70 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => nav("/")}
            >
              <path
                d="M33.76 29.64V33.32C33.76 35 32.76 36.12 31.24 36.12H2.76C1.24 36.12 0.24 35 0.24 33.32V29.64C0.24 27.96 1.24 26.84 2.76 26.84H10.32V25.36H2.76C1.24 25.36 0.24 24.24 0.24 22.56V12.44C0.24 10.76 1.24 9.52 2.72 9.4C9.48 8.84 13.96 8.92 21.28 9.64V8.44C13.96 7.72 9.48 7.64 2.72 8.2C1.24 8.32 0.24 7.32 0.24 5.64V3.4C0.24 1.72 1.24 0.599998 2.76 0.599998H31.24C32.76 0.599998 33.76 1.72 33.76 3.4V13.52C33.76 15.2 32.76 16.44 31.28 16.56C24.52 17.12 20.04 17.04 12.72 16.32V17.52C20.04 18.24 24.52 18.32 31.28 17.76C32.76 17.64 33.76 18.64 33.76 20.32V22.56C33.76 24.24 32.76 25.36 31.24 25.36H23.68V26.84H31.24C32.76 26.84 33.76 27.96 33.76 29.64ZM69.7756 3.4V17.6C69.7756 19.28 68.7756 20.4 67.2556 20.4H61.8156C60.2956 20.4 59.2956 19.28 59.2956 17.6V3.4C59.2956 1.72 60.2956 0.599998 61.8156 0.599998H67.2556C68.7756 0.599998 69.7756 1.72 69.7756 3.4ZM69.7756 24.16V33.32C69.7756 35 68.7756 36.12 67.2556 36.12H60.5356C59.0156 36.12 58.0156 35 58.0156 33.32V30.6H38.7756C37.2556 30.6 36.2556 29.48 36.2556 27.8V24.16C36.2556 22.48 37.2556 21.36 38.7756 21.36H67.2556C68.7756 21.36 69.7756 22.48 69.7756 24.16ZM58.4556 3.4V4.88C58.4556 6.56 57.4556 7.68 55.9356 7.68H38.7756C37.2556 7.68 36.2556 6.56 36.2556 4.88V3.4C36.2556 1.72 37.2556 0.599998 38.7756 0.599998H55.9356C57.4556 0.599998 58.4556 1.72 58.4556 3.4ZM58.4556 14.88V17.56C58.4556 19.24 57.4556 20.36 55.9356 20.36H38.7756C37.2556 20.36 36.2556 19.24 36.2556 17.56V14.88C36.2556 13.92 37.3356 13.2 37.3356 12.24V11.28C37.3356 9.6 38.3356 8.48 39.8556 8.48H44.4556C45.9756 8.48 46.9756 9.6 46.9756 11.28V13.28H47.9356V11.28C47.9356 9.6 48.9356 8.48 50.4556 8.48H55.0556C56.5756 8.48 57.5756 9.6 57.5756 11.28V12C57.5756 12.96 58.4556 13.92 58.4556 14.88Z"
                fill="url(#paint0_linear_51_1934)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_51_1934"
                  x1="34.2414"
                  y1="36.5789"
                  x2="34.2414"
                  y2="-0.526316"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.203158" stop-color="#0A40DE" />
                  <stop offset="1" stop-color="#4D76EF" />
                </linearGradient>
              </defs>
            </svg>
            <p>포인트 충전</p>
          </Logo>
          <Input placeholder="충전할 포인트를 입력해주세요." />
        </div>
        <Button onClick={() => nav("/")}>충전하기</Button>
      </A>
    </Container>
  );
};

const Logo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  > p {
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const Container = styled.div`
  display: flex;
  padding: 0 160px;
  justify-content: center;
  align-items: center;
`;

const A = styled.div`
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: #f7f8fa;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 11px 4px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  border-radius: 8px;
  border: none;
  background-color: #0a40de;
  color: #fff;
`;
