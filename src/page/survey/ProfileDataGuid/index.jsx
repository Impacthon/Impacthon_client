import React, { useState, useEffect } from 'react';

import { Button } from '../../../common/button/style';
import styled from 'styled-components';
import { API } from '../../../api';
import { Link, useNavigate } from 'react-router-dom';

const ProfileDataGuid = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
  const province = localStorage.getItem('Guidelocal');
  const style = localStorage.getItem('style');
  const description = localStorage.getItem('memo');

  const handleSignup = async () => {
    try {
      await API.post(`/register/expert`, null, {
        params: {
          user_id: id,
          province: province,
          style: style,
          description: description,
        },
      });
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert('중복된 아이디나 이름이 있습니다.');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    }
  };
  return (
    <Background>
      <SigninContainer>
        <TextContainer>
          <Title>가이드 설문지</Title>
          <Text>지역에 놀거리를 잘 알고, 계획을 세우는 것을 좋아하는 당신을 알려주세요</Text>
          <Svg>
            <svg width="416" height="76" viewBox="0 0 416 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="8.74228e-08" y1="15" x2="416" y2="15" stroke="#D4D4D8" stroke-width="2" />
              <circle cx="80" cy="16" r="15.5" fill="white" stroke="#D4D4D8" />
              <path d="M77.608 11.76V10.432H80.616V22H79.144V11.76H77.608Z" fill="#0A40DE" />
              <path
                d="M44.8348 51.14H41.1868L40.5148 53H39.3628L42.3868 44.684H43.6468L46.6588 53H45.5068L44.8348 51.14ZM44.5228 50.252L43.0108 46.028L41.4988 50.252H44.5228ZM47.5687 49.7C47.5687 49.02 47.7047 48.428 47.9767 47.924C48.2487 47.412 48.6247 47.016 49.1047 46.736C49.5927 46.456 50.1487 46.316 50.7727 46.316C51.5807 46.316 52.2447 46.512 52.7647 46.904C53.2927 47.296 53.6407 47.84 53.8087 48.536H52.6327C52.5207 48.136 52.3007 47.82 51.9727 47.588C51.6527 47.356 51.2527 47.24 50.7727 47.24C50.1487 47.24 49.6447 47.456 49.2607 47.888C48.8767 48.312 48.6847 48.916 48.6847 49.7C48.6847 50.492 48.8767 51.104 49.2607 51.536C49.6447 51.968 50.1487 52.184 50.7727 52.184C51.2527 52.184 51.6527 52.072 51.9727 51.848C52.2927 51.624 52.5127 51.304 52.6327 50.888H53.8087C53.6327 51.56 53.2807 52.1 52.7527 52.508C52.2247 52.908 51.5647 53.108 50.7727 53.108C50.1487 53.108 49.5927 52.968 49.1047 52.688C48.6247 52.408 48.2487 52.012 47.9767 51.5C47.7047 50.988 47.5687 50.388 47.5687 49.7ZM54.8578 49.7C54.8578 49.02 54.9938 48.428 55.2658 47.924C55.5378 47.412 55.9138 47.016 56.3938 46.736C56.8818 46.456 57.4378 46.316 58.0618 46.316C58.8698 46.316 59.5338 46.512 60.0538 46.904C60.5818 47.296 60.9298 47.84 61.0978 48.536H59.9218C59.8098 48.136 59.5898 47.82 59.2618 47.588C58.9418 47.356 58.5418 47.24 58.0618 47.24C57.4378 47.24 56.9338 47.456 56.5498 47.888C56.1658 48.312 55.9738 48.916 55.9738 49.7C55.9738 50.492 56.1658 51.104 56.5498 51.536C56.9338 51.968 57.4378 52.184 58.0618 52.184C58.5418 52.184 58.9418 52.072 59.2618 51.848C59.5818 51.624 59.8018 51.304 59.9218 50.888H61.0978C60.9218 51.56 60.5698 52.1 60.0418 52.508C59.5138 52.908 58.8538 53.108 58.0618 53.108C57.4378 53.108 56.8818 52.968 56.3938 52.688C55.9138 52.408 55.5378 52.012 55.2658 51.5C54.9938 50.988 54.8578 50.388 54.8578 49.7ZM65.4229 53.108C64.8069 53.108 64.2469 52.968 63.7429 52.688C63.2469 52.408 62.8549 52.012 62.5669 51.5C62.2869 50.98 62.1469 50.38 62.1469 49.7C62.1469 49.028 62.2909 48.436 62.5789 47.924C62.8749 47.404 63.2749 47.008 63.7789 46.736C64.2829 46.456 64.8469 46.316 65.4709 46.316C66.0949 46.316 66.6589 46.456 67.1629 46.736C67.6669 47.008 68.0629 47.4 68.3509 47.912C68.6469 48.424 68.7949 49.02 68.7949 49.7C68.7949 50.38 68.6429 50.98 68.3389 51.5C68.0429 52.012 67.6389 52.408 67.1269 52.688C66.6149 52.968 66.0469 53.108 65.4229 53.108ZM65.4229 52.148C65.8149 52.148 66.1829 52.056 66.5269 51.872C66.8709 51.688 67.1469 51.412 67.3549 51.044C67.5709 50.676 67.6789 50.228 67.6789 49.7C67.6789 49.172 67.5749 48.724 67.3669 48.356C67.1589 47.988 66.8869 47.716 66.5509 47.54C66.2149 47.356 65.8509 47.264 65.4589 47.264C65.0589 47.264 64.6909 47.356 64.3549 47.54C64.0269 47.716 63.7629 47.988 63.5629 48.356C63.3629 48.724 63.2629 49.172 63.2629 49.7C63.2629 50.236 63.3589 50.688 63.5509 51.056C63.7509 51.424 64.0149 51.7 64.3429 51.884C64.6709 52.06 65.0309 52.148 65.4229 52.148ZM76.0626 46.424V53H74.9706V52.028C74.7626 52.364 74.4706 52.628 74.0946 52.82C73.7266 53.004 73.3186 53.096 72.8706 53.096C72.3586 53.096 71.8986 52.992 71.4906 52.784C71.0826 52.568 70.7586 52.248 70.5186 51.824C70.2866 51.4 70.1706 50.884 70.1706 50.276V46.424H71.2506V50.132C71.2506 50.78 71.4146 51.28 71.7426 51.632C72.0706 51.976 72.5186 52.148 73.0866 52.148C73.6706 52.148 74.1306 51.968 74.4666 51.608C74.8026 51.248 74.9706 50.724 74.9706 50.036V46.424H76.0626ZM81.1104 46.304C81.9104 46.304 82.5584 46.548 83.0544 47.036C83.5504 47.516 83.7984 48.212 83.7984 49.124V53H82.7184V49.28C82.7184 48.624 82.5544 48.124 82.2264 47.78C81.8984 47.428 81.4504 47.252 80.8824 47.252C80.3064 47.252 79.8464 47.432 79.5024 47.792C79.1664 48.152 78.9984 48.676 78.9984 49.364V53H77.9064V46.424H78.9984V47.36C79.2144 47.024 79.5064 46.764 79.8744 46.58C80.2504 46.396 80.6624 46.304 81.1104 46.304ZM86.9142 47.324V51.2C86.9142 51.52 86.9822 51.748 87.1182 51.884C87.2542 52.012 87.4902 52.076 87.8262 52.076H88.6302V53H87.6462C87.0382 53 86.5822 52.86 86.2782 52.58C85.9742 52.3 85.8222 51.84 85.8222 51.2V47.324H84.9702V46.424H85.8222V44.768H86.9142V46.424H88.6302V47.324H86.9142ZM98.3005 44.636V45.524H96.0205V53H94.9285V45.524H92.6365V44.636H98.3005ZM105.309 46.424L101.349 56.096H100.221L101.517 52.928L98.8647 46.424H100.077L102.141 51.752L104.181 46.424H105.309ZM107.498 47.636C107.714 47.26 108.034 46.948 108.458 46.7C108.89 46.444 109.39 46.316 109.958 46.316C110.542 46.316 111.07 46.456 111.542 46.736C112.022 47.016 112.398 47.412 112.67 47.924C112.942 48.428 113.078 49.016 113.078 49.688C113.078 50.352 112.942 50.944 112.67 51.464C112.398 51.984 112.022 52.388 111.542 52.676C111.07 52.964 110.542 53.108 109.958 53.108C109.398 53.108 108.902 52.984 108.47 52.736C108.046 52.48 107.722 52.164 107.498 51.788V56.12H106.406V46.424H107.498V47.636ZM111.962 49.688C111.962 49.192 111.862 48.76 111.662 48.392C111.462 48.024 111.19 47.744 110.846 47.552C110.51 47.36 110.138 47.264 109.73 47.264C109.33 47.264 108.958 47.364 108.614 47.564C108.278 47.756 108.006 48.04 107.798 48.416C107.598 48.784 107.498 49.212 107.498 49.7C107.498 50.196 107.598 50.632 107.798 51.008C108.006 51.376 108.278 51.66 108.614 51.86C108.958 52.052 109.33 52.148 109.73 52.148C110.138 52.148 110.51 52.052 110.846 51.86C111.19 51.66 111.462 51.376 111.662 51.008C111.862 50.632 111.962 50.192 111.962 49.688ZM120.516 49.46C120.516 49.668 120.504 49.888 120.48 50.12H115.224C115.264 50.768 115.484 51.276 115.884 51.644C116.292 52.004 116.784 52.184 117.36 52.184C117.832 52.184 118.224 52.076 118.536 51.86C118.856 51.636 119.08 51.34 119.208 50.972H120.384C120.208 51.604 119.856 52.12 119.328 52.52C118.8 52.912 118.144 53.108 117.36 53.108C116.736 53.108 116.176 52.968 115.68 52.688C115.192 52.408 114.808 52.012 114.528 51.5C114.248 50.98 114.108 50.38 114.108 49.7C114.108 49.02 114.244 48.424 114.516 47.912C114.788 47.4 115.168 47.008 115.656 46.736C116.152 46.456 116.72 46.316 117.36 46.316C117.984 46.316 118.536 46.452 119.016 46.724C119.496 46.996 119.864 47.372 120.12 47.852C120.384 48.324 120.516 48.86 120.516 49.46ZM119.388 49.232C119.388 48.816 119.296 48.46 119.112 48.164C118.928 47.86 118.676 47.632 118.356 47.48C118.044 47.32 117.696 47.24 117.312 47.24C116.76 47.24 116.288 47.416 115.896 47.768C115.512 48.12 115.292 48.608 115.236 49.232H119.388Z"
                fill="#C8C8D0"
              />
              <circle cx="208" cy="16" r="15.5" fill="white" stroke="#D4D4D8" />
              <path
                d="M203.816 20.832C205.171 19.744 206.232 18.8533 207 18.16C207.768 17.456 208.413 16.7253 208.936 15.968C209.469 15.2 209.736 14.448 209.736 13.712C209.736 13.0187 209.565 12.4747 209.224 12.08C208.893 11.6747 208.355 11.472 207.608 11.472C206.883 11.472 206.317 11.7013 205.912 12.16C205.517 12.608 205.304 13.2107 205.272 13.968H203.864C203.907 12.7733 204.269 11.8507 204.952 11.2C205.635 10.5493 206.515 10.224 207.592 10.224C208.691 10.224 209.56 10.528 210.2 11.136C210.851 11.744 211.176 12.5813 211.176 13.648C211.176 14.5333 210.909 15.3973 210.376 16.24C209.853 17.072 209.256 17.808 208.584 18.448C207.912 19.0773 207.053 19.8133 206.008 20.656H211.512V21.872H203.816V20.832Z"
                fill="#0C2F95"
              />
              <path
                d="M188.741 47.084C188.741 47.78 188.501 48.36 188.021 48.824C187.549 49.28 186.825 49.508 185.849 49.508H184.241V53H183.149V44.636H185.849C186.793 44.636 187.509 44.864 187.997 45.32C188.493 45.776 188.741 46.364 188.741 47.084ZM185.849 48.608C186.457 48.608 186.905 48.476 187.193 48.212C187.481 47.948 187.625 47.572 187.625 47.084C187.625 46.052 187.033 45.536 185.849 45.536H184.241V48.608H185.849ZM196.098 49.46C196.098 49.668 196.086 49.888 196.062 50.12H190.806C190.846 50.768 191.066 51.276 191.466 51.644C191.874 52.004 192.366 52.184 192.942 52.184C193.414 52.184 193.806 52.076 194.118 51.86C194.438 51.636 194.662 51.34 194.79 50.972H195.966C195.79 51.604 195.438 52.12 194.91 52.52C194.382 52.912 193.726 53.108 192.942 53.108C192.318 53.108 191.758 52.968 191.262 52.688C190.774 52.408 190.39 52.012 190.11 51.5C189.83 50.98 189.69 50.38 189.69 49.7C189.69 49.02 189.826 48.424 190.098 47.912C190.37 47.4 190.75 47.008 191.238 46.736C191.734 46.456 192.302 46.316 192.942 46.316C193.566 46.316 194.118 46.452 194.598 46.724C195.078 46.996 195.446 47.372 195.702 47.852C195.966 48.324 196.098 48.86 196.098 49.46ZM194.97 49.232C194.97 48.816 194.878 48.46 194.694 48.164C194.51 47.86 194.258 47.632 193.938 47.48C193.626 47.32 193.278 47.24 192.894 47.24C192.342 47.24 191.87 47.416 191.478 47.768C191.094 48.12 190.874 48.608 190.818 49.232H194.97ZM198.631 47.492C198.823 47.116 199.095 46.824 199.447 46.616C199.807 46.408 200.243 46.304 200.755 46.304V47.432H200.467C199.243 47.432 198.631 48.096 198.631 49.424V53H197.539V46.424H198.631V47.492ZM204.344 53.108C203.84 53.108 203.388 53.024 202.988 52.856C202.588 52.68 202.272 52.44 202.04 52.136C201.808 51.824 201.68 51.468 201.656 51.068H202.784C202.816 51.396 202.968 51.664 203.24 51.872C203.52 52.08 203.884 52.184 204.332 52.184C204.748 52.184 205.076 52.092 205.316 51.908C205.556 51.724 205.676 51.492 205.676 51.212C205.676 50.924 205.548 50.712 205.292 50.576C205.036 50.432 204.64 50.292 204.104 50.156C203.616 50.028 203.216 49.9 202.904 49.772C202.6 49.636 202.336 49.44 202.112 49.184C201.896 48.92 201.788 48.576 201.788 48.152C201.788 47.816 201.888 47.508 202.088 47.228C202.288 46.948 202.572 46.728 202.94 46.568C203.308 46.4 203.728 46.316 204.2 46.316C204.928 46.316 205.516 46.5 205.964 46.868C206.412 47.236 206.652 47.74 206.684 48.38H205.592C205.568 48.036 205.428 47.76 205.172 47.552C204.924 47.344 204.588 47.24 204.164 47.24C203.772 47.24 203.46 47.324 203.228 47.492C202.996 47.66 202.88 47.88 202.88 48.152C202.88 48.368 202.948 48.548 203.084 48.692C203.228 48.828 203.404 48.94 203.612 49.028C203.828 49.108 204.124 49.2 204.5 49.304C204.972 49.432 205.356 49.56 205.652 49.688C205.948 49.808 206.2 49.992 206.408 50.24C206.624 50.488 206.736 50.812 206.744 51.212C206.744 51.572 206.644 51.896 206.444 52.184C206.244 52.472 205.96 52.7 205.592 52.868C205.232 53.028 204.816 53.108 204.344 53.108ZM211.153 53.108C210.537 53.108 209.977 52.968 209.473 52.688C208.977 52.408 208.585 52.012 208.297 51.5C208.017 50.98 207.877 50.38 207.877 49.7C207.877 49.028 208.021 48.436 208.309 47.924C208.605 47.404 209.005 47.008 209.509 46.736C210.013 46.456 210.577 46.316 211.201 46.316C211.825 46.316 212.389 46.456 212.893 46.736C213.397 47.008 213.793 47.4 214.081 47.912C214.377 48.424 214.525 49.02 214.525 49.7C214.525 50.38 214.373 50.98 214.069 51.5C213.773 52.012 213.369 52.408 212.857 52.688C212.345 52.968 211.777 53.108 211.153 53.108ZM211.153 52.148C211.545 52.148 211.913 52.056 212.257 51.872C212.601 51.688 212.877 51.412 213.085 51.044C213.301 50.676 213.409 50.228 213.409 49.7C213.409 49.172 213.305 48.724 213.097 48.356C212.889 47.988 212.617 47.716 212.281 47.54C211.945 47.356 211.581 47.264 211.189 47.264C210.789 47.264 210.421 47.356 210.085 47.54C209.757 47.716 209.493 47.988 209.293 48.356C209.093 48.724 208.993 49.172 208.993 49.7C208.993 50.236 209.089 50.688 209.281 51.056C209.481 51.424 209.745 51.7 210.073 51.884C210.401 52.06 210.761 52.148 211.153 52.148ZM219.165 46.304C219.965 46.304 220.613 46.548 221.109 47.036C221.605 47.516 221.853 48.212 221.853 49.124V53H220.773V49.28C220.773 48.624 220.609 48.124 220.281 47.78C219.953 47.428 219.505 47.252 218.937 47.252C218.361 47.252 217.901 47.432 217.557 47.792C217.221 48.152 217.053 48.676 217.053 49.364V53H215.961V46.424H217.053V47.36C217.269 47.024 217.561 46.764 217.929 46.58C218.305 46.396 218.717 46.304 219.165 46.304ZM223.229 49.688C223.229 49.016 223.365 48.428 223.637 47.924C223.909 47.412 224.281 47.016 224.753 46.736C225.233 46.456 225.765 46.316 226.349 46.316C226.925 46.316 227.425 46.44 227.849 46.688C228.273 46.936 228.589 47.248 228.797 47.624V46.424H229.901V53H228.797V51.776C228.581 52.16 228.257 52.48 227.825 52.736C227.401 52.984 226.905 53.108 226.337 53.108C225.753 53.108 225.225 52.964 224.753 52.676C224.281 52.388 223.909 51.984 223.637 51.464C223.365 50.944 223.229 50.352 223.229 49.688ZM228.797 49.7C228.797 49.204 228.697 48.772 228.497 48.404C228.297 48.036 228.025 47.756 227.681 47.564C227.345 47.364 226.973 47.264 226.565 47.264C226.157 47.264 225.785 47.36 225.449 47.552C225.113 47.744 224.845 48.024 224.645 48.392C224.445 48.76 224.345 49.192 224.345 49.688C224.345 50.192 224.445 50.632 224.645 51.008C224.845 51.376 225.113 51.66 225.449 51.86C225.785 52.052 226.157 52.148 226.565 52.148C226.973 52.148 227.345 52.052 227.681 51.86C228.025 51.66 228.297 51.376 228.497 51.008C228.697 50.632 228.797 50.196 228.797 49.7ZM232.838 44.12V53H231.746V44.12H232.838ZM175.077 62.636V71H173.985V62.636H175.077ZM180.142 64.304C180.942 64.304 181.59 64.548 182.086 65.036C182.582 65.516 182.83 66.212 182.83 67.124V71H181.75V67.28C181.75 66.624 181.586 66.124 181.258 65.78C180.93 65.428 180.482 65.252 179.914 65.252C179.338 65.252 178.878 65.432 178.534 65.792C178.198 66.152 178.03 66.676 178.03 67.364V71H176.938V64.424H178.03V65.36C178.246 65.024 178.538 64.764 178.906 64.58C179.282 64.396 179.694 64.304 180.142 64.304ZM187.289 65.324H185.909V71H184.817V65.324H183.965V64.424H184.817V63.956C184.817 63.22 185.005 62.684 185.381 62.348C185.765 62.004 186.377 61.832 187.217 61.832V62.744C186.737 62.744 186.397 62.84 186.197 63.032C186.005 63.216 185.909 63.524 185.909 63.956V64.424H187.289V65.324ZM191.431 71.108C190.815 71.108 190.255 70.968 189.751 70.688C189.255 70.408 188.863 70.012 188.575 69.5C188.295 68.98 188.155 68.38 188.155 67.7C188.155 67.028 188.299 66.436 188.587 65.924C188.883 65.404 189.283 65.008 189.787 64.736C190.291 64.456 190.855 64.316 191.479 64.316C192.103 64.316 192.667 64.456 193.171 64.736C193.675 65.008 194.071 65.4 194.359 65.912C194.655 66.424 194.803 67.02 194.803 67.7C194.803 68.38 194.651 68.98 194.347 69.5C194.051 70.012 193.647 70.408 193.135 70.688C192.623 70.968 192.055 71.108 191.431 71.108ZM191.431 70.148C191.823 70.148 192.191 70.056 192.535 69.872C192.879 69.688 193.155 69.412 193.363 69.044C193.579 68.676 193.687 68.228 193.687 67.7C193.687 67.172 193.583 66.724 193.375 66.356C193.167 65.988 192.895 65.716 192.559 65.54C192.223 65.356 191.859 65.264 191.467 65.264C191.067 65.264 190.699 65.356 190.363 65.54C190.035 65.716 189.771 65.988 189.571 66.356C189.371 66.724 189.271 67.172 189.271 67.7C189.271 68.236 189.367 68.688 189.559 69.056C189.759 69.424 190.023 69.7 190.351 69.884C190.679 70.06 191.039 70.148 191.431 70.148ZM197.33 65.492C197.522 65.116 197.794 64.824 198.146 64.616C198.506 64.408 198.942 64.304 199.454 64.304V65.432H199.166C197.942 65.432 197.33 66.096 197.33 67.424V71H196.238V64.424H197.33V65.492ZM208.623 64.304C209.135 64.304 209.591 64.412 209.991 64.628C210.391 64.836 210.707 65.152 210.939 65.576C211.171 66 211.287 66.516 211.287 67.124V71H210.207V67.28C210.207 66.624 210.043 66.124 209.715 65.78C209.395 65.428 208.959 65.252 208.407 65.252C207.839 65.252 207.387 65.436 207.051 65.804C206.715 66.164 206.547 66.688 206.547 67.376V71H205.467V67.28C205.467 66.624 205.303 66.124 204.975 65.78C204.655 65.428 204.219 65.252 203.667 65.252C203.099 65.252 202.647 65.436 202.311 65.804C201.975 66.164 201.807 66.688 201.807 67.376V71H200.715V64.424H201.807V65.372C202.023 65.028 202.311 64.764 202.671 64.58C203.039 64.396 203.443 64.304 203.883 64.304C204.435 64.304 204.923 64.428 205.347 64.676C205.771 64.924 206.087 65.288 206.295 65.768C206.479 65.304 206.783 64.944 207.207 64.688C207.631 64.432 208.103 64.304 208.623 64.304ZM212.67 67.688C212.67 67.016 212.806 66.428 213.078 65.924C213.35 65.412 213.722 65.016 214.194 64.736C214.674 64.456 215.206 64.316 215.79 64.316C216.366 64.316 216.866 64.44 217.29 64.688C217.714 64.936 218.03 65.248 218.238 65.624V64.424H219.342V71H218.238V69.776C218.022 70.16 217.698 70.48 217.266 70.736C216.842 70.984 216.346 71.108 215.778 71.108C215.194 71.108 214.666 70.964 214.194 70.676C213.722 70.388 213.35 69.984 213.078 69.464C212.806 68.944 212.67 68.352 212.67 67.688ZM218.238 67.7C218.238 67.204 218.138 66.772 217.938 66.404C217.738 66.036 217.466 65.756 217.122 65.564C216.786 65.364 216.414 65.264 216.006 65.264C215.598 65.264 215.226 65.36 214.89 65.552C214.554 65.744 214.286 66.024 214.086 66.392C213.886 66.76 213.786 67.192 213.786 67.688C213.786 68.192 213.886 68.632 214.086 69.008C214.286 69.376 214.554 69.66 214.89 69.86C215.226 70.052 215.598 70.148 216.006 70.148C216.414 70.148 216.786 70.052 217.122 69.86C217.466 69.66 217.738 69.376 217.938 69.008C218.138 68.632 218.238 68.196 218.238 67.7ZM222.52 65.324V69.2C222.52 69.52 222.588 69.748 222.724 69.884C222.86 70.012 223.096 70.076 223.432 70.076H224.236V71H223.252C222.644 71 222.188 70.86 221.884 70.58C221.58 70.3 221.428 69.84 221.428 69.2V65.324H220.576V64.424H221.428V62.768H222.52V64.424H224.236V65.324H222.52ZM226.123 63.356C225.915 63.356 225.739 63.284 225.595 63.14C225.451 62.996 225.379 62.82 225.379 62.612C225.379 62.404 225.451 62.228 225.595 62.084C225.739 61.94 225.915 61.868 226.123 61.868C226.323 61.868 226.491 61.94 226.627 62.084C226.771 62.228 226.843 62.404 226.843 62.612C226.843 62.82 226.771 62.996 226.627 63.14C226.491 63.284 226.323 63.356 226.123 63.356ZM226.651 64.424V71H225.559V64.424H226.651ZM231.38 71.108C230.764 71.108 230.204 70.968 229.7 70.688C229.204 70.408 228.812 70.012 228.524 69.5C228.244 68.98 228.104 68.38 228.104 67.7C228.104 67.028 228.248 66.436 228.536 65.924C228.832 65.404 229.232 65.008 229.736 64.736C230.24 64.456 230.804 64.316 231.428 64.316C232.052 64.316 232.616 64.456 233.12 64.736C233.624 65.008 234.02 65.4 234.308 65.912C234.604 66.424 234.752 67.02 234.752 67.7C234.752 68.38 234.6 68.98 234.296 69.5C234 70.012 233.596 70.408 233.084 70.688C232.572 70.968 232.004 71.108 231.38 71.108ZM231.38 70.148C231.772 70.148 232.14 70.056 232.484 69.872C232.828 69.688 233.104 69.412 233.312 69.044C233.528 68.676 233.636 68.228 233.636 67.7C233.636 67.172 233.532 66.724 233.324 66.356C233.116 65.988 232.844 65.716 232.508 65.54C232.172 65.356 231.808 65.264 231.416 65.264C231.016 65.264 230.648 65.356 230.312 65.54C229.984 65.716 229.72 65.988 229.52 66.356C229.32 66.724 229.22 67.172 229.22 67.7C229.22 68.236 229.316 68.688 229.508 69.056C229.708 69.424 229.972 69.7 230.3 69.884C230.628 70.06 230.988 70.148 231.38 70.148ZM239.392 64.304C240.192 64.304 240.84 64.548 241.336 65.036C241.832 65.516 242.08 66.212 242.08 67.124V71H241V67.28C241 66.624 240.836 66.124 240.508 65.78C240.18 65.428 239.732 65.252 239.164 65.252C238.588 65.252 238.128 65.432 237.784 65.792C237.448 66.152 237.28 66.676 237.28 67.364V71H236.188V64.424H237.28V65.36C237.496 65.024 237.788 64.764 238.156 64.58C238.532 64.396 238.944 64.304 239.392 64.304Z"
                fill="#C8C8D0"
              />
              <circle cx="336" cy="16" r="15.5" fill="#0A40DE" stroke="#0A40DE" />
              <path
                d="M331.96 13.344C332.035 12.3627 332.413 11.5947 333.096 11.04C333.779 10.4853 334.664 10.208 335.752 10.208C336.477 10.208 337.101 10.3413 337.624 10.608C338.157 10.864 338.557 11.216 338.824 11.664C339.101 12.112 339.24 12.6187 339.24 13.184C339.24 13.8453 339.048 14.416 338.664 14.896C338.291 15.376 337.8 15.6853 337.192 15.824V15.904C337.885 16.0747 338.435 16.4107 338.84 16.912C339.245 17.4133 339.448 18.0693 339.448 18.88C339.448 19.488 339.309 20.0373 339.032 20.528C338.755 21.008 338.339 21.3867 337.784 21.664C337.229 21.9413 336.563 22.08 335.784 22.08C334.653 22.08 333.725 21.7867 333 21.2C332.275 20.6027 331.869 19.76 331.784 18.672H333.192C333.267 19.312 333.528 19.8347 333.976 20.24C334.424 20.6453 335.021 20.848 335.768 20.848C336.515 20.848 337.08 20.656 337.464 20.272C337.859 19.8773 338.056 19.3707 338.056 18.752C338.056 17.952 337.789 17.376 337.256 17.024C336.723 16.672 335.917 16.496 334.84 16.496H334.472V15.28H334.856C335.837 15.2693 336.579 15.1093 337.08 14.8C337.581 14.48 337.832 13.9893 337.832 13.328C337.832 12.7627 337.645 12.3093 337.272 11.968C336.909 11.6267 336.387 11.456 335.704 11.456C335.043 11.456 334.509 11.6267 334.104 11.968C333.699 12.3093 333.459 12.768 333.384 13.344H331.96Z"
                fill="white"
              />
              <path
                d="M308.18 47.084C308.18 47.78 307.94 48.36 307.46 48.824C306.988 49.28 306.264 49.508 305.288 49.508H303.68V53H302.588V44.636H305.288C306.232 44.636 306.948 44.864 307.436 45.32C307.932 45.776 308.18 46.364 308.18 47.084ZM305.288 48.608C305.896 48.608 306.344 48.476 306.632 48.212C306.92 47.948 307.064 47.572 307.064 47.084C307.064 46.052 306.472 45.536 305.288 45.536H303.68V48.608H305.288ZM310.629 47.492C310.821 47.116 311.093 46.824 311.445 46.616C311.805 46.408 312.241 46.304 312.753 46.304V47.432H312.465C311.241 47.432 310.629 48.096 310.629 49.424V53H309.537V46.424H310.629V47.492ZM316.882 53.108C316.266 53.108 315.706 52.968 315.202 52.688C314.706 52.408 314.314 52.012 314.026 51.5C313.746 50.98 313.606 50.38 313.606 49.7C313.606 49.028 313.75 48.436 314.038 47.924C314.334 47.404 314.734 47.008 315.238 46.736C315.742 46.456 316.306 46.316 316.93 46.316C317.554 46.316 318.118 46.456 318.622 46.736C319.126 47.008 319.522 47.4 319.81 47.912C320.106 48.424 320.254 49.02 320.254 49.7C320.254 50.38 320.102 50.98 319.798 51.5C319.502 52.012 319.098 52.408 318.586 52.688C318.074 52.968 317.506 53.108 316.882 53.108ZM316.882 52.148C317.274 52.148 317.642 52.056 317.986 51.872C318.33 51.688 318.606 51.412 318.814 51.044C319.03 50.676 319.138 50.228 319.138 49.7C319.138 49.172 319.034 48.724 318.826 48.356C318.618 47.988 318.346 47.716 318.01 47.54C317.674 47.356 317.31 47.264 316.918 47.264C316.518 47.264 316.15 47.356 315.814 47.54C315.486 47.716 315.222 47.988 315.022 48.356C314.822 48.724 314.722 49.172 314.722 49.7C314.722 50.236 314.818 50.688 315.01 51.056C315.21 51.424 315.474 51.7 315.802 51.884C316.13 52.06 316.49 52.148 316.882 52.148ZM324.366 47.324H322.986V53H321.894V47.324H321.042V46.424H321.894V45.956C321.894 45.22 322.082 44.684 322.458 44.348C322.842 44.004 323.454 43.832 324.294 43.832V44.744C323.814 44.744 323.474 44.84 323.274 45.032C323.082 45.216 322.986 45.524 322.986 45.956V46.424H324.366V47.324ZM326.203 45.356C325.995 45.356 325.819 45.284 325.675 45.14C325.531 44.996 325.459 44.82 325.459 44.612C325.459 44.404 325.531 44.228 325.675 44.084C325.819 43.94 325.995 43.868 326.203 43.868C326.403 43.868 326.571 43.94 326.707 44.084C326.851 44.228 326.923 44.404 326.923 44.612C326.923 44.82 326.851 44.996 326.707 45.14C326.571 45.284 326.403 45.356 326.203 45.356ZM326.731 46.424V53H325.639V46.424H326.731ZM329.684 44.12V53H328.592V44.12H329.684ZM337.545 49.46C337.545 49.668 337.533 49.888 337.509 50.12H332.253C332.293 50.768 332.513 51.276 332.913 51.644C333.321 52.004 333.813 52.184 334.389 52.184C334.861 52.184 335.253 52.076 335.565 51.86C335.885 51.636 336.109 51.34 336.237 50.972H337.413C337.237 51.604 336.885 52.12 336.357 52.52C335.829 52.912 335.173 53.108 334.389 53.108C333.765 53.108 333.205 52.968 332.709 52.688C332.221 52.408 331.837 52.012 331.557 51.5C331.277 50.98 331.137 50.38 331.137 49.7C331.137 49.02 331.273 48.424 331.545 47.912C331.817 47.4 332.197 47.008 332.685 46.736C333.181 46.456 333.749 46.316 334.389 46.316C335.013 46.316 335.565 46.452 336.045 46.724C336.525 46.996 336.893 47.372 337.149 47.852C337.413 48.324 337.545 48.86 337.545 49.46ZM336.417 49.232C336.417 48.816 336.325 48.46 336.141 48.164C335.957 47.86 335.705 47.632 335.385 47.48C335.073 47.32 334.725 47.24 334.341 47.24C333.789 47.24 333.317 47.416 332.925 47.768C332.541 48.12 332.321 48.608 332.265 49.232H336.417ZM344.79 44.636C345.702 44.636 346.49 44.808 347.154 45.152C347.826 45.488 348.338 45.972 348.69 46.604C349.05 47.236 349.23 47.98 349.23 48.836C349.23 49.692 349.05 50.436 348.69 51.068C348.338 51.692 347.826 52.172 347.154 52.508C346.49 52.836 345.702 53 344.79 53H342.186V44.636H344.79ZM344.79 52.1C345.87 52.1 346.694 51.816 347.262 51.248C347.83 50.672 348.114 49.868 348.114 48.836C348.114 47.796 347.826 46.984 347.25 46.4C346.682 45.816 345.862 45.524 344.79 45.524H343.278V52.1H344.79ZM350.262 49.688C350.262 49.016 350.398 48.428 350.67 47.924C350.942 47.412 351.314 47.016 351.786 46.736C352.266 46.456 352.798 46.316 353.382 46.316C353.958 46.316 354.458 46.44 354.882 46.688C355.306 46.936 355.622 47.248 355.83 47.624V46.424H356.934V53H355.83V51.776C355.614 52.16 355.29 52.48 354.858 52.736C354.434 52.984 353.938 53.108 353.37 53.108C352.786 53.108 352.258 52.964 351.786 52.676C351.314 52.388 350.942 51.984 350.67 51.464C350.398 50.944 350.262 50.352 350.262 49.688ZM355.83 49.7C355.83 49.204 355.73 48.772 355.53 48.404C355.33 48.036 355.058 47.756 354.714 47.564C354.378 47.364 354.006 47.264 353.598 47.264C353.19 47.264 352.818 47.36 352.482 47.552C352.146 47.744 351.878 48.024 351.678 48.392C351.478 48.76 351.378 49.192 351.378 49.688C351.378 50.192 351.478 50.632 351.678 51.008C351.878 51.376 352.146 51.66 352.482 51.86C352.818 52.052 353.19 52.148 353.598 52.148C354.006 52.148 354.378 52.052 354.714 51.86C355.058 51.66 355.33 51.376 355.53 51.008C355.73 50.632 355.83 50.196 355.83 49.7ZM360.111 47.324V51.2C360.111 51.52 360.179 51.748 360.315 51.884C360.451 52.012 360.687 52.076 361.023 52.076H361.827V53H360.843C360.235 53 359.779 52.86 359.475 52.58C359.171 52.3 359.019 51.84 359.019 51.2V47.324H358.167V46.424H359.019V44.768H360.111V46.424H361.827V47.324H360.111ZM362.743 49.688C362.743 49.016 362.879 48.428 363.151 47.924C363.423 47.412 363.795 47.016 364.267 46.736C364.747 46.456 365.279 46.316 365.863 46.316C366.439 46.316 366.939 46.44 367.363 46.688C367.787 46.936 368.103 47.248 368.311 47.624V46.424H369.415V53H368.311V51.776C368.095 52.16 367.771 52.48 367.339 52.736C366.915 52.984 366.419 53.108 365.851 53.108C365.267 53.108 364.739 52.964 364.267 52.676C363.795 52.388 363.423 51.984 363.151 51.464C362.879 50.944 362.743 50.352 362.743 49.688ZM368.311 49.7C368.311 49.204 368.211 48.772 368.011 48.404C367.811 48.036 367.539 47.756 367.195 47.564C366.859 47.364 366.487 47.264 366.079 47.264C365.671 47.264 365.299 47.36 364.963 47.552C364.627 47.744 364.359 48.024 364.159 48.392C363.959 48.76 363.859 49.192 363.859 49.688C363.859 50.192 363.959 50.632 364.159 51.008C364.359 51.376 364.627 51.66 364.963 51.86C365.299 52.052 365.671 52.148 366.079 52.148C366.487 52.148 366.859 52.052 367.195 51.86C367.539 51.66 367.811 51.376 368.011 51.008C368.211 50.632 368.311 50.196 368.311 49.7Z"
                fill="#0C2F95"
              />
            </svg>
          </Svg>
        </TextContainer>
        <ButtonContainer>
          <Link to="/login">
            <AfterButton onClick={handleSignup}>회원가입</AfterButton>
          </Link>
        </ButtonContainer>
      </SigninContainer>
    </Background>
  );
};

export default ProfileDataGuid;

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
  cursor: pointer;
`;

export const Input = styled.input`
  display: flex;
  width: 416px;
  padding: 13px 20px;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  background: var(--Gray-White, #fff);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
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
