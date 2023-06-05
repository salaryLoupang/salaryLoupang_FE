import React from 'react';
import { useRouter } from 'next/router';

import './Setting.css';

import { Title } from 'components/Title';
import { File } from 'components/Form/File';
import { ButtonBox } from 'components/ButtonBox';
import { Button } from 'components/Button';
import { Thumbnail } from 'components/Thumbnail';

import IMG_VSCODE from './img/thumbnail-vscode.png';
import IMG_FIGMA from './img/thumbnail-figma.png';
import IMG_PHOTOSHOP from './img/thumbnail-photoshop.png';
import IMG_POWERPOINT from './img/thumbnail-powerpoint.png';
import IMG_EXCEL from './img/thumbnail-excel.png';
import IMG_WORD from './img/thumbnail-word.png';

import { postImageNum } from 'api/requestImage';

const Setting = () => {
  const router = useRouter();
  const [sample, setSample] = React.useState(0);

  const $imgFile = React.useRef(null);
  const [file, setFile] = React.useState(null);
  const [fileImg, setFileImg] = React.useState(null);

  const settingImgNum = () => {
    postImageNum({ imageNum: sample }).then(() => {
      router.push({
        pathname: '/main',
      });
    });
  };

  return (
    <div className="setting-page">
      <div className="setting-box">
        <Title shape="default">위장술에 쓸 배경을 골라봐요.</Title>
        <div className="setting-imgbox">
          <div
            className="setting-img"
            style={{
              backgroundImage: fileImg ? `url(${fileImg})` : '',
            }}
          ></div>
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
        <File
          ref={$imgFile}
          id="settingImg"
          value={file}
          onChange={() => {
            const file = $imgFile.current.files[0];
            setFile(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              setFileImg(reader.result);
            };
          }}
        />

        <div className="setting-warning">배경이미지 크기 권장 1440*800</div>
        <Title shape="info">샘플배경 고르기</Title>
        <div className="setting-list">
          <Thumbnail
            title="VS code"
            on={sample === 0}
            onClick={() => {
              setSample(0);
            }}
          >
            <img src={IMG_VSCODE.src} alt="vscode" />
          </Thumbnail>
          <Thumbnail
            title="Figma"
            on={sample === 1}
            onClick={() => {
              setSample(1);
            }}
          >
            <img src={IMG_FIGMA.src} alt="figma" />
          </Thumbnail>
          <Thumbnail
            title="Power point"
            on={sample === 2}
            onClick={() => {
              setSample(2);
            }}
          >
            <img src={IMG_POWERPOINT.src} alt="power point" />
          </Thumbnail>
          <Thumbnail
            title="Photoshop"
            on={sample === 3}
            onClick={() => {
              setSample(3);
            }}
          >
            <img src={IMG_PHOTOSHOP.src} alt="photoshop" />
          </Thumbnail>
          <Thumbnail
            title="Excel"
            on={sample === 4}
            onClick={() => {
              setSample(4);
            }}
          >
            <img src={IMG_EXCEL.src} alt="excel" />
          </Thumbnail>
          <Thumbnail
            title="Word"
            on={sample === 5}
            onClick={() => {
              setSample(5);
            }}
          >
            <img src={IMG_WORD.src} alt="word" />
          </Thumbnail>
        </div>

        <ButtonBox>
          <Button
            shape="default"
            variant="primary"
            size="wide"
            onClick={() => {
              settingImgNum();
            }}
          >
            루팡 시작하기
          </Button>
        </ButtonBox>
      </div>
    </div>
  );
};

export default Setting;
