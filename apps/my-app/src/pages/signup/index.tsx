import React from 'react';

import './SignUp.css';

import { Title } from 'components/Title';
import { Input } from 'components/Form/Input';
import { Select } from 'components/Form/Select';
import { FormGroup } from 'components/FormGroup';
import { Button } from 'components/Button';
import { List } from 'components/List';

const SignUp = () => {
  const [formValue, setFormValue] = React.useState({});
  return (
    <div className="login-page">
      <div className="login-box">
        <Title>월급 괴도협회 가입하기</Title>
        <FormGroup>
          <FormGroup.Title>닉네임 (한글 최대 6자)</FormGroup.Title>
          <FormGroup.Content>
            <Input value="" onChange={() => {}} />
          </FormGroup.Content>
        </FormGroup>
        <FormGroup>
          <FormGroup.Title>경력</FormGroup.Title>
          <FormGroup.Content>
            <Select
              value={1}
              options={[
                {
                  text: '디자인',
                  value: 1,
                },
                {
                  text: '개발',
                  value: 2,
                },
                {
                  text: '기획',
                  value: 3,
                },
              ]}
            />
          </FormGroup.Content>
        </FormGroup>
        <FormGroup>
          <FormGroup.Title>직군</FormGroup.Title>
          <FormGroup.Content>
            <Select
              value={1}
              options={[
                {
                  text: '디자인',
                  value: 1,
                },
                {
                  text: '개발',
                  value: 2,
                },
                {
                  text: '기획',
                  value: 3,
                },
              ]}
            />
          </FormGroup.Content>
        </FormGroup>
        <FormGroup>
          <FormGroup.Title>직무</FormGroup.Title>
          <FormGroup.Content>
            <Select
              value={''}
              options={[
                {
                  text: '',
                  value: '(복수 선택 가능) 직무를 추가하세요',
                },
              ]}
            />
          </FormGroup.Content>
        </FormGroup>
        <Title shape="default">입력시 얼마나 루팡했는지 계산해드려요.</Title>
        <FormGroup>
          <FormGroup.Title>연봉(선택)</FormGroup.Title>
          <FormGroup.Content>
            <Input value="" onChange={() => {}} />
          </FormGroup.Content>
        </FormGroup>
        <Button variant="primary" onClick={() => {}}>
          가입하기
        </Button>
      </div>
      <div className="login-info">
        <div class="login-img"></div>
        <Title shape="default">
          어서오세요. 오늘도 선량한 월급 도둑이 될게요!
        </Title>
        <List shape="default">
          <List.Item>
            딴짓을 숨길 수 있는 바탕화면 위장술을 쓸 수 있어요.
          </List.Item>
          <List.Item>
            얼른 지루한 시간을 보낼 수 있는 미니게임을 해봐요.
          </List.Item>
          <List.Item>
            점심시간이 한참 남았을 때는 추천메뉴를 찾아봐요.
          </List.Item>
          <List.Item>다가올 휴가계획을 남몰래 짜볼 수 있어요.</List.Item>
          <List.Item>
            얼마나 열심히 일 안하고 돈을 벌었는지 체크 해볼까요?
          </List.Item>
        </List>
        <div class="login-img"></div>
      </div>
    </div>
  );
};

export default SignUp;
