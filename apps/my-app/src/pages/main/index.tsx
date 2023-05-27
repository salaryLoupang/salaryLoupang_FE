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

const Main = () => {
  const [page, setPage] = React.useState('explore');

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
    <div className="main-page">
      <Screen>
        <Screen.Item
          left={
            <>
              <ButtonIcon icon="arrow-right" onClick={() => {}} />
              <div className="hover-box">
                <Button shape="basic" variant="secondary" onClick={() => {}}>
                  닉네임 괴도님! 지금까지 00000원 루팡 하셨어요!
                </Button>
              </div>
            </>
          }
        />
        <Screen.Item
          left={
            <>
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
            </>
          }
          right={<Switch checked={true} onChange={() => {}} />}
        />
        <Screen.Box>{renderScreen()}</Screen.Box>
        <Screen.Item
          right={
            <>
              <ButtonIcon icon="arrow-left" onClick={() => {}} />
              <div className="hover-box">
                <Button shape="basic" variant="primary">
                  배경설정하기
                </Button>
              </div>
            </>
          }
        />
      </Screen>
    </div>
  );
};

export default Main;
