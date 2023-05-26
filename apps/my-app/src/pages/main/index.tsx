import React from 'react';

import './Main.css';

import { Switch } from 'components/Form/Switch';
import { Button } from 'components/Button';
import { ButtonIcon } from 'components/ButtonIcon';
import { Screen } from 'components/Screen';

import Explore from './Explore';
import GameA from './GameA';
import RecommandMenu from './RecommandMenu';
import TravelInfo from './TravelInfo';

const Main = () => {
  return (
    <div className="main-page">
      <Screen>
        <Screen.Item
          left={
            <>
              <ButtonIcon icon="arrow-right" onClick={() => {}} />
              <Button shape="basic" variant="secondary" onClick={() => {}}>
                닉네임 괴도님! 지금까지 00000원 루팡 하셨어요!
              </Button>
            </>
          }
        />
        <Screen.Item
          left={
            <>
              <ButtonIcon icon="arrow-right" onClick={() => {}} />
              <Button shape="basic" variant="primary">
                검색하기
              </Button>
              <Button shape="basic" variant="secondary">
                게임1
              </Button>
              <Button shape="basic" variant="secondary">
                게임2
              </Button>
              <Button shape="basic" variant="secondary">
                점심메뉴추천
              </Button>
              <Button shape="basic" variant="secondary">
                여행정보수집
              </Button>
            </>
          }
          right={<Switch checked={true} onChange={() => {}} />}
        />
        <Screen.Box>
          <RecommandMenu />
        </Screen.Box>
        <Screen.Item
          right={
            <>
              <Button shape="basic" variant="primary">
                배경설정하기
              </Button>
              <ButtonIcon icon="arrow-left" onClick={() => {}} />
            </>
          }
        />
      </Screen>
    </div>
  );
};

export default Main;
