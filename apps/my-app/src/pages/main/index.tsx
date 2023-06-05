import React from 'react';
import { useRouter } from 'next/router';

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

import { getLoupang } from 'api/requestLoupang';

const Main = () => {
  const router = useRouter();

  const [page, setPage] = React.useState('explore');
  const [nickname, setNickname] = React.useState('');
  const [loupang, setLoupang] = React.useState({
    salary: 0,
    time: 0,
  });

  const [onOff, setOnOff] = React.useState(true);

  const requestLoupang = () => {
    getLoupang().then(data => {
      setNickname(data.nickname);
      setLoupang({
        salary: data.loupangSalary,
        time: data.loupangTime,
      });
    });
  };

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

  React.useEffect(() => {
    requestLoupang();
  }, []);

  return (
    <div className="main-page">
      <Screen>
        <Screen.Item
          left={
            <>
              <ButtonIcon icon="arrow-right" onClick={() => {}} />
              {onOff && (
                <div className="hover-box">
                  <Button shape="basic" variant="secondary" onClick={() => {}}>
                    {nickname} 괴도님! 지금까지 {loupang.salary || 0}원 루팡
                    하셨어요!
                  </Button>
                </div>
              )}
            </>
          }
        />
        <Screen.Item
          left={
            <>
              <ButtonIcon icon="arrow-right" onClick={() => {}} />
              {onOff && (
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
              )}
            </>
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
        <Screen.Box on={true}>{renderScreen()}</Screen.Box>
        <Screen.Item
          right={
            <>
              <ButtonIcon icon="arrow-left" onClick={() => {}} />
              {onOff && (
                <div className="hover-box">
                  <Button
                    shape="basic"
                    variant="primary"
                    onClick={() => {
                      router.push({
                        pathname: '/setting',
                      });
                    }}
                  >
                    배경설정하기
                  </Button>
                </div>
              )}
            </>
          }
        />
      </Screen>
    </div>
  );
};

export default Main;
