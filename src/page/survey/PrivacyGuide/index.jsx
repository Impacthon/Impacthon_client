import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Privacyadmin = () => {

  const backbutton = ()=>{
    window.history.go(-1);  
  }
  return (
    <Background>
      <SigninContainer>
        <TextContainer>
          <Title>현지인 설문지</Title>
          <Text>지역에 놀거리를 잘 알고, 계획을 세우는 것을 좋아하는 당신을 알려주세요</Text>
          <Svg>
            <svg width="416" height="58" viewBox="0 0 416 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.470703" y1="15" x2="415.53" y2="15" stroke="#D4D4D8" stroke-width="2" />
              <circle cx="81.3945" cy="16" r="15.5" fill="white" stroke="#D4D4D8" />
              <path d="M79.0025 11.76V10.432H82.0105V22H80.5385V11.76H79.0025Z" fill="#0A40DE" />
              <path
                d="M38.2692 45.5H41.5452V46.328H38.2692V45.5ZM38.2692 48.932H41.5452V49.76H38.2692V48.932ZM36.2772 43.916C37.8492 43.916 38.9772 45.392 38.9772 47.696C38.9772 50.012 37.8492 51.488 36.2772 51.488C34.6932 51.488 33.5772 50.012 33.5772 47.696C33.5772 45.392 34.6932 43.916 36.2772 43.916ZM36.2772 44.816C35.2332 44.816 34.5132 45.944 34.5132 47.696C34.5132 49.46 35.2332 50.612 36.2772 50.612C37.3212 50.612 38.0412 49.46 38.0412 47.696C38.0412 45.944 37.3212 44.816 36.2772 44.816ZM41.3292 43.076H42.3132V53.948H41.3292V43.076ZM52.6082 43.088H53.5562V49.952H52.6082V43.088ZM50.8442 46.028H52.8962V46.856H50.8442V46.028ZM50.2922 43.304H51.2282V49.568H50.2922V43.304ZM44.3642 44.384H49.8602V45.176H44.3642V44.384ZM47.1242 45.728C48.4802 45.728 49.4282 46.472 49.4282 47.588C49.4282 48.716 48.4802 49.448 47.1242 49.448C45.7562 49.448 44.8082 48.716 44.8082 47.588C44.8082 46.472 45.7562 45.728 47.1242 45.728ZM47.1242 46.472C46.2722 46.472 45.6962 46.916 45.6962 47.588C45.6962 48.272 46.2722 48.704 47.1242 48.704C47.9642 48.704 48.5402 48.272 48.5402 47.588C48.5402 46.916 47.9642 46.472 47.1242 46.472ZM46.6322 43.172H47.6042V44.828H46.6322V43.172ZM50.0042 50.144C52.2602 50.144 53.6162 50.816 53.6162 52.028C53.6162 53.228 52.2602 53.912 50.0042 53.912C47.7242 53.912 46.3802 53.228 46.3802 52.028C46.3802 50.816 47.7242 50.144 50.0042 50.144ZM50.0042 50.912C48.3362 50.912 47.3642 51.308 47.3642 52.028C47.3642 52.748 48.3362 53.156 50.0042 53.156C51.6482 53.156 52.6322 52.748 52.6322 52.028C52.6322 51.308 51.6482 50.912 50.0042 50.912ZM63.6473 43.088H64.5953V49.484H63.6473V43.088ZM61.9193 45.812H63.9713V46.64H61.9193V45.812ZM61.2833 43.292H62.2193V49.424H61.2833V43.292ZM57.3113 50H64.5953V53.936H63.6113V50.816H57.3113V50ZM59.1713 43.892H60.1793C60.1793 46.484 58.7393 48.44 56.0033 49.592L55.5113 48.86C57.9233 47.876 59.1713 46.256 59.1713 44.228V43.892ZM55.9433 43.892H59.5313V44.708H55.9433V43.892ZM70.9063 41.696L67.6183 55.04H66.5383L69.8143 41.696H70.9063ZM80.1294 43.1H81.1254V51.368H80.1294V43.1ZM78.2934 45.968H80.5494V46.784H78.2934V45.968ZM78.2934 48.26H80.5494V49.064H78.2934V48.26ZM72.2214 44.408H78.2934V45.212H72.2214V44.408ZM75.2934 45.812C76.7334 45.812 77.7414 46.64 77.7414 47.888C77.7414 49.124 76.7334 49.964 75.2934 49.964C73.8414 49.964 72.8334 49.124 72.8334 47.888C72.8334 46.64 73.8414 45.812 75.2934 45.812ZM75.2934 46.592C74.3934 46.592 73.7814 47.12 73.7814 47.888C73.7814 48.656 74.3934 49.172 75.2934 49.172C76.1934 49.172 76.8054 48.656 76.8054 47.888C76.8054 47.12 76.1934 46.592 75.2934 46.592ZM74.8014 43.076H75.7974V44.924H74.8014V43.076ZM74.1534 52.88H81.3894V53.696H74.1534V52.88ZM74.1534 50.66H75.1494V53.276H74.1534V50.66ZM86.1164 44.636H86.9204V46.4C86.9204 48.692 85.5404 50.996 83.8124 51.848L83.2364 51.056C84.8084 50.312 86.1164 48.272 86.1164 46.4V44.636ZM86.3084 44.636H87.1124V46.4C87.1124 48.236 88.4204 50.108 90.0164 50.792L89.4524 51.584C87.7004 50.768 86.3084 48.656 86.3084 46.4V44.636ZM83.5964 44.192H89.6564V45.032H83.5964V44.192ZM91.1204 43.088H92.1164V53.936H91.1204V43.088ZM102.172 43.1H103.18V51.02H102.172V43.1ZM96.2075 52.88H103.504V53.696H96.2075V52.88ZM96.2075 50.204H97.1915V53.156H96.2075V50.204ZM97.3595 43.844C98.9795 43.844 100.18 44.948 100.18 46.52C100.18 48.08 98.9795 49.196 97.3595 49.196C95.7395 49.196 94.5275 48.08 94.5275 46.52C94.5275 44.948 95.7395 43.844 97.3595 43.844ZM97.3595 44.708C96.3035 44.708 95.4995 45.452 95.4995 46.52C95.4995 47.576 96.3035 48.32 97.3595 48.32C98.4155 48.32 99.2195 47.576 99.2195 46.52C99.2195 45.452 98.4155 44.708 97.3595 44.708ZM114.082 45.644H116.818V46.472H114.082V45.644ZM111.238 43.748H112.042V45.08C112.042 47.18 110.866 48.932 109.054 49.664L108.538 48.872C110.146 48.272 111.238 46.736 111.238 45.08V43.748ZM111.43 43.748H112.234V45.116C112.234 46.628 113.29 48.056 114.862 48.632L114.322 49.4C112.594 48.728 111.43 47.048 111.43 45.116V43.748ZM116.446 43.1H117.442V51.212H116.446V43.1ZM110.47 52.88H117.706V53.696H110.47V52.88ZM110.47 50.312H111.466V53.264H110.47V50.312ZM120.021 48.272H120.717C122.421 48.272 123.429 48.236 124.641 47.996L124.737 48.812C123.489 49.052 122.457 49.1 120.717 49.1H120.021V48.272ZM120.021 43.88H124.221V44.696H120.981V48.716H120.021V43.88ZM120.681 46.04H124.089V46.82H120.681V46.04ZM127.749 43.088H128.697V49.664H127.749V43.088ZM125.997 45.92H128.049V46.736H125.997V45.92ZM125.361 43.292H126.297V49.604H125.361V43.292ZM121.425 50.24H128.697V53.936H127.713V51.056H121.425V50.24Z"
                fill="#C8C8D0"
              />
              <circle cx="210.395" cy="16" r="15.5" fill="#0A40DE" stroke="#0A40DE" />
              <path
                d="M206.211 20.832C207.565 19.744 208.627 18.8533 209.395 18.16C210.163 17.456 210.808 16.7253 211.331 15.968C211.864 15.2 212.131 14.448 212.131 13.712C212.131 13.0187 211.96 12.4747 211.619 12.08C211.288 11.6747 210.749 11.472 210.003 11.472C209.277 11.472 208.712 11.7013 208.307 12.16C207.912 12.608 207.699 13.2107 207.667 13.968H206.259C206.301 12.7733 206.664 11.8507 207.347 11.2C208.029 10.5493 208.909 10.224 209.987 10.224C211.085 10.224 211.955 10.528 212.595 11.136C213.245 11.744 213.571 12.5813 213.571 13.648C213.571 14.5333 213.304 15.3973 212.771 16.24C212.248 17.072 211.651 17.808 210.979 18.448C210.307 19.0773 209.448 19.8133 208.403 20.656H213.907V21.872H206.211V20.832Z"
                fill="white"
              />
              <path
                d="M195.549 43.088H196.509V53.936H195.549V43.088ZM193.797 47.444H195.873V48.26H193.797V47.444ZM190.989 44.48H191.949C191.949 47.276 190.989 49.868 187.893 51.608L187.305 50.9C190.029 49.376 190.989 47.18 190.989 44.672V44.48ZM187.725 44.48H191.325V45.308H187.725V44.48ZM193.137 43.376H194.085V53.408H193.137V43.376ZM206.24 43.1H207.248V51.02H206.24V43.1ZM200.276 52.88H207.572V53.696H200.276V52.88ZM200.276 50.204H201.26V53.156H200.276V50.204ZM201.428 43.844C203.048 43.844 204.248 44.948 204.248 46.52C204.248 48.08 203.048 49.196 201.428 49.196C199.808 49.196 198.596 48.08 198.596 46.52C198.596 44.948 199.808 43.844 201.428 43.844ZM201.428 44.708C200.372 44.708 199.568 45.452 199.568 46.52C199.568 47.576 200.372 48.32 201.428 48.32C202.484 48.32 203.288 47.576 203.288 46.52C203.288 45.452 202.484 44.708 201.428 44.708ZM218.378 45.896H220.826V46.724H218.378V45.896ZM220.514 43.088H221.51V49.556H220.514V43.088ZM217.946 49.88C220.178 49.88 221.558 50.636 221.558 51.908C221.558 53.192 220.178 53.924 217.946 53.924C215.702 53.924 214.322 53.192 214.322 51.908C214.322 50.636 215.702 49.88 217.946 49.88ZM217.946 50.66C216.314 50.66 215.318 51.116 215.318 51.908C215.318 52.688 216.314 53.144 217.946 53.144C219.578 53.144 220.574 52.688 220.574 51.908C220.574 51.116 219.578 50.66 217.946 50.66ZM215.354 44.18H216.17V45.056C216.17 47.06 214.946 48.776 213.146 49.448L212.63 48.656C214.238 48.068 215.354 46.616 215.354 45.056V44.18ZM215.546 44.18H216.35V45.056C216.35 46.46 217.406 47.804 218.978 48.356L218.474 49.148C216.71 48.512 215.546 46.88 215.546 45.056V44.18ZM212.93 43.88H218.726V44.696H212.93V43.88ZM223.633 51.728H233.461V52.556H223.633V51.728ZM228.025 49.136H229.021V51.968H228.025V49.136ZM224.785 43.856H225.769V45.788H231.301V43.856H232.285V49.4H224.785V43.856ZM225.769 46.592V48.584H231.301V46.592H225.769Z"
                fill="#0C2F95"
              />
              <circle cx="338.395" cy="16" r="15.5" fill="white" stroke="#D4D4D8" />
              <path
                d="M334.355 13.344C334.429 12.3627 334.808 11.5947 335.491 11.04C336.173 10.4853 337.059 10.208 338.147 10.208C338.872 10.208 339.496 10.3413 340.019 10.608C340.552 10.864 340.952 11.216 341.219 11.664C341.496 12.112 341.635 12.6187 341.635 13.184C341.635 13.8453 341.443 14.416 341.059 14.896C340.685 15.376 340.195 15.6853 339.587 15.824V15.904C340.28 16.0747 340.829 16.4107 341.235 16.912C341.64 17.4133 341.843 18.0693 341.843 18.88C341.843 19.488 341.704 20.0373 341.427 20.528C341.149 21.008 340.733 21.3867 340.179 21.664C339.624 21.9413 338.957 22.08 338.179 22.08C337.048 22.08 336.12 21.7867 335.395 21.2C334.669 20.6027 334.264 19.76 334.179 18.672H335.587C335.661 19.312 335.923 19.8347 336.371 20.24C336.819 20.6453 337.416 20.848 338.163 20.848C338.909 20.848 339.475 20.656 339.859 20.272C340.253 19.8773 340.451 19.3707 340.451 18.752C340.451 17.952 340.184 17.376 339.651 17.024C339.117 16.672 338.312 16.496 337.235 16.496H336.867V15.28H337.251C338.232 15.2693 338.973 15.1093 339.475 14.8C339.976 14.48 340.227 13.9893 340.227 13.328C340.227 12.7627 340.04 12.3093 339.667 11.968C339.304 11.6267 338.781 11.456 338.099 11.456C337.437 11.456 336.904 11.6267 336.499 11.968C336.093 12.3093 335.853 12.768 335.779 13.344H334.355Z"
                fill="#0C2F95"
              />
              <path
                d="M330.751 47.588H331.747V49.232H330.751V47.588ZM331.219 43.58C332.791 43.58 333.895 44.444 333.895 45.728C333.895 47.012 332.791 47.864 331.219 47.864C329.659 47.864 328.555 47.012 328.555 45.728C328.555 44.444 329.659 43.58 331.219 43.58ZM331.219 44.348C330.199 44.348 329.491 44.912 329.491 45.728C329.491 46.556 330.199 47.108 331.219 47.108C332.251 47.108 332.959 46.556 332.959 45.728C332.959 44.912 332.251 44.348 331.219 44.348ZM335.359 43.1H336.355V51.392H335.359V43.1ZM335.935 46.76H337.939V47.588H335.935V46.76ZM329.491 52.868H336.739V53.696H329.491V52.868ZM329.491 50.684H330.487V53.228H329.491V50.684ZM328.063 49.784L327.931 48.968C329.839 48.968 332.479 48.944 334.687 48.608L334.759 49.34C332.491 49.76 329.923 49.784 328.063 49.784ZM341.731 49.448H342.715V52.112H341.731V49.448ZM345.199 49.424H346.171V52.1H345.199V49.424ZM338.995 51.776H348.823V52.604H338.995V51.776ZM340.183 43.892H347.611V47.168H341.203V49.352H340.219V46.376H346.627V44.696H340.183V43.892ZM340.219 48.908H347.863V49.724H340.219V48.908Z"
                fill="#C8C8D0"
              />
            </svg>
          </Svg>
        </TextContainer>
        <InputContainer>
        <DataContainer>
          <InputText>
          지역
          </InputText>
          <Input placeholder='John Doe'></Input>
        </DataContainer>
        <DataContainer>
          <InputText>
          여행 스타일
          </InputText>
          <Input placeholder='johndoe@mail.com'></Input>
        </DataContainer>
        <DataContainer>
          <InputText>
          실명
          </InputText>
          <Input placeholder='********'></Input>
        </DataContainer>
        </InputContainer>
        <ButtonContainer>
          <BeforeButton onClick={backbutton}>이전</BeforeButton>
          <Link to='/ProfileDataGuid'>
          <AfterButton>다음</AfterButton>
          </Link>
        </ButtonContainer>
      </SigninContainer>
    </Background>
  );
};

export default Privacyadmin;

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
  width: 480px;
  padding: 48px 32px;
  height: 690px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0);
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: center;
`;

export const Title = styled.p`
  color: var(--zinc-800, #27272a);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;

export const Text = styled.p`
  color: var(--zinc-350, #c8c8d0);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

export const Svg = styled.div`
  margin-top: 56px;
  margin-bottom: 61px;
`;
export const InputContainer = styled.div`
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
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




export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 51px;
  right: 45px;
`;

export const BeforeButton = styled.button`
  display: flex;
  height: 40px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background: var(--zinc-0, #fff);

  color: var(--zinc-350, #c8c8d0);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
`;

export const AfterButton = styled.button`
  display: flex;
  height: 40px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;

  border-radius: 4px;
  background: var(--Foundation-LP_DarkBlue-Normal, #0a40de);

  color: var(--zinc-0, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  display: flex;
width: 416px;
padding: 13px 20px;
justify-content: space-between;
align-items: center;

border-radius: 8px;
background: var(--Gray-White, #FFF);
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);   
border: none;

  color: #707070;

  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;
