import React from 'react';

import './Main.css';

import { Switch } from 'components/Form/Switch';
import { Button } from 'components/Button';
import { ButtonIcon } from 'components/ButtonIcon';
import { Screen } from 'components/Screen';

import Explore from './Explore';
import GameA from './GameA';
import GameB from './GameB';
import RecommandMenu from './RecommandMenu';
import TravelInfo from './TravelInfo';

import VSCODE from './img/vscode.png';

const Main = () => {
  const [page, setPage] = React.useState('explore');

  const [onOff, setOnOff] = React.useState(true);

  const renderScreen = () => {
    switch (page) {
      case 'explore':
        return <Explore />;
      case 'gamea':
        return <GameA />;
      case 'gameb':
        return <GameB />;
      case 'recommandmenu':
        return <RecommandMenu />;
      case 'travelinfo':
        return <TravelInfo />;
    }
  };

  return (
    <div
      className="main-page"
      style={{
        backgroundImage: `url(${VSCODE.src})`,
      }}
    >
      <Screen>
        <Screen.Item
          left={
            <div className="hover-container">
              <ButtonIcon icon="arrow-right" onClick={() => {}} />
              <div className="hover-box">
                <Button shape="basic" variant="secondary" onClick={() => {}}>
                  닉네임 괴도님! 지금까지 00000원 루팡 하셨어요!
                </Button>
              </div>
            </div>
          }
        />
        <Screen.Item
          left={
            <div className="hover-container">
              <ButtonIcon icon="arrow-right" onClick={() => {}} />
              <div className="hover-box">
                <Button
                  shape="basic"
                  variant={page === 'explore' ? 'primary' : 'secondary'}
                  onClick={() => {
                    if (page === 'explore') return;
                    setPage('explore');
                  }}
                >
                  검색하기
                </Button>
                <Button
                  shape="basic"
                  variant={page === 'gamea' ? 'primary' : 'secondary'}
                  onClick={() => {
                    if (page === 'gamea') return;
                    setPage('gamea');
                  }}
                >
                  게임1
                </Button>
                <Button
                  shape="basic"
                  variant={page === 'gameb' ? 'primary' : 'secondary'}
                  onClick={() => {
                    if (page === 'gameb') return;
                    setPage('gameb');
                  }}
                >
                  게임2
                </Button>
                <Button
                  shape="basic"
                  variant={page === 'recommandmenu' ? 'primary' : 'secondary'}
                  onClick={() => {
                    if (page === 'recommandmenu') return;
                    setPage('recommandmenu');
                  }}
                >
                  점심메뉴추천
                </Button>
                <Button
                  shape="basic"
                  variant={page === 'travelinfo' ? 'primary' : 'secondary'}
                  onClick={() => {
                    if (page === 'travelinfo') return;
                    setPage('travelinfo');
                  }}
                >
                  여행정보수집
                </Button>
              </div>
            </div>
          }
          right={
            <Switch
              id="onOff"
              checked={onOff}
              onChange={value => {
                setOnOff(value);
              }}
            />
          }
        />
        <Screen.Box on={onOff}>{onOff && renderScreen()}</Screen.Box>
        <Screen.Item
          right={
            <div className="hover-container">
              <ButtonIcon icon="arrow-left" onClick={() => {}} />
              <div className="hover-box">
                <Button shape="basic" variant="primary">
                  배경설정하기
                </Button>
              </div>
            </div>
          }
        />
      </Screen>
    </div>
  );
};

export default Main;
