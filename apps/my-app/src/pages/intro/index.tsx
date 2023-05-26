import React from 'react';

import './Intro.css';

import { Button } from 'components/Button';

const Intro = () => {
  return (
    <div className="intro-page">
      <div className="intro-box">
        <div className="intro-img"></div>
        <h1 className="intro-title">쉿, 당신의 월급을 훔쳐드립니다.</h1>
        <h2 className="intro-subtitle">
          간편하게 로그인하고 다양한
          <br />
          서비스를 이용해보세요.
        </h2>
        <Button variant="kakao">카카오톡 로그인</Button>
      </div>
    </div>
  );
};

export default Intro;
