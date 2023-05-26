import React from 'react';

import './Setting.css';

import { Title } from 'components/Title';
import { Input } from 'components/Form/Input';
import { ButtonBox } from 'components/ButtonBox';
import { Button } from 'components/Button';
import { Thumbnail } from 'components/Thumbnail';

const Setting = () => {
  return (
    <div className="setting-page">
      <div className="setting-box">
        <Title shape="default">위장술에 쓸 배경을 골라봐요.</Title>
        <div className="setting-imgbox">
          <div className="setting-img"></div>
          <div className="setting-info">
            <div className="setting-title">Tip</div>
            <div className="setting-text">
              내가 주로 사용하고 있는 화면을 골라요. 월급루팡을 할 때 <br />{' '}
              보다 당당하게 뒷자리를 신경쓰지 않을 수 있어요.
            </div>
            <div className="setting-warning">
              단, 중앙에 위치한 ‘딴짓하는 창'은 몸으로 잘 가리기!
            </div>
          </div>
        </div>
        <Title shape="info">내가 직접 업로드하기</Title>
        <div className="file">
          <Input value="" onChange={() => {}} />
          <Button shape="default" variant="secondary">
            파일 선택하기
          </Button>
        </div>

        <div className="setting-warning">배경이미지 크기 권장 1440*800</div>
        <Title shape="info">샘플배경 고르기</Title>
        <div className="setting-list">
          <Thumbnail title="VS code">sdgg</Thumbnail>
          <Thumbnail>sdgg</Thumbnail>
          <Thumbnail>sdgg</Thumbnail>
        </div>

        <ButtonBox>
          <Button
            shape="default"
            variant="primary"
            size="wide"
            onClick={() => {}}
          >
            루팡 시작하기
          </Button>
        </ButtonBox>
      </div>
    </div>
  );
};

export default Setting;
