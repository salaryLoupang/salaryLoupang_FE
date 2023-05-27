import React from 'react';
import { useRouter } from 'next/router';

import './SignUp.css';

import { Title } from 'components/Title';
import { Input } from 'components/Form/Input';
import { Select } from 'components/Form/Select';
import { FormGroup } from 'components/FormGroup';
import { Button } from 'components/Button';
import { List } from 'components/List';

import { postSignUp } from 'api/requestLogin';

const getJabGroup = (job: number) => {
  const jobs = {
    0: [
      {
        value: 0,
        text: '시각 디자이너',
      },
      {
        value: 1,
        text: '그래픽 디자이너',
      },
      {
        value: 2,
        text: 'UI/UX 디자이너',
      },
    ],
    1: [
      {
        value: 3,
        text: 'FE',
      },
      {
        value: 4,
        text: 'BE',
      },
      {
        value: 5,
        text: 'IOS',
      },
    ],
    2: [
      {
        value: 6,
        text: '서비스기획',
      },
      {
        value: 7,
        text: 'PM',
      },
      {
        value: 8,
        text: 'PO',
      },
    ],
  };

  return jobs[job] || [];
};

const SignUp = () => {
  const router = useRouter();
  const { code: authCode } = router.query;

  const [formValue, setFormValue] = React.useState({
    nickname: '',
    career: 0,
    job: 0,
    jobGroup: [''],
    salary: '',
  });

  const signUp = async () => {
    try {
      const dataValue = {
        ...formValue,
        jobGroup: formValue.jobGroup.join(','),
      };
      const res = await postSignUp({ code: authCode, ...dataValue });
      console.log(res);
    } catch (e) {
      router.push({
        pathname: '/setting',
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <Title>월급 괴도협회 가입하기</Title>
        <FormGroup>
          <FormGroup.Title>닉네임 (한글 최대 6자)</FormGroup.Title>
          <FormGroup.Content>
            <Input
              maxLength={6}
              value={formValue.nickname}
              onChange={value => {
                setFormValue(formValue => {
                  return {
                    ...formValue,
                    nickname: value,
                  };
                });
              }}
            />
          </FormGroup.Content>
        </FormGroup>
        <FormGroup>
          <FormGroup.Title>경력</FormGroup.Title>
          <FormGroup.Content>
            <Select
              multi={false}
              value={formValue.career}
              options={[
                {
                  value: 0,
                  text: '신입',
                },
                {
                  value: 1,
                  text: '경력',
                },
              ]}
              onChange={value => {
                setFormValue(formValue => {
                  return {
                    ...formValue,
                    career: Number(value),
                  };
                });
              }}
            />
          </FormGroup.Content>
        </FormGroup>
        <FormGroup>
          <FormGroup.Title>직군</FormGroup.Title>
          <FormGroup.Content>
            <Select
              multi={false}
              value={formValue.job}
              options={[
                {
                  value: 0,
                  text: '디자인',
                },
                {
                  value: 1,
                  text: '개발',
                },
                {
                  value: 2,
                  text: '기획',
                },
              ]}
              onChange={value => {
                setFormValue(formValue => {
                  return {
                    ...formValue,
                    job: Number(value),
                    jabGroup: [''],
                  };
                });
              }}
            />
          </FormGroup.Content>
        </FormGroup>
        <FormGroup>
          <FormGroup.Title>직무</FormGroup.Title>
          <FormGroup.Content>
            {console.log(formValue.jobGroup)}
            <Select
              multi={true}
              value={formValue.jobGroup.map(item => String(item)) || ''}
              options={[
                {
                  value: '',
                  text: '(복수 선택 가능) 직무를 추가하세요',
                },
                ...getJabGroup(formValue.job),
              ]}
              onChange={value => {
                const result = Array.from(value, v => Number(v.value));

                setFormValue(formValue => {
                  return {
                    ...formValue,
                    jobGroup: result,
                  };
                });
              }}
            />
          </FormGroup.Content>
        </FormGroup>
        <Title shape="default">입력시 얼마나 루팡했는지 계산해드려요.</Title>
        <FormGroup>
          <FormGroup.Title>연봉(선택)</FormGroup.Title>
          <FormGroup.Content>
            <Input
              type="number"
              value={formValue.salary}
              text="만원"
              onChange={value => {
                if (isNaN(value)) return;
                setFormValue(formValue => {
                  return {
                    ...formValue,
                    salary: Number(value),
                  };
                });
              }}
            />
          </FormGroup.Content>
        </FormGroup>
        <Button
          variant="primary"
          onClick={() => {
            signUp();
          }}
        >
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
