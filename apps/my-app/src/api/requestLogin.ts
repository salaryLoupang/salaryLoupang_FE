import { ajaxRequest } from './common';

export const postLogin = ({ code }: { code: string }) => {
  return ajaxRequest({
    method: 'post',
    url: '/v1/api/login',
    body: { authorizationCode: code },
  });
};

export const postSignUp = ({
  code,
  nickname,
  career,
  job,
  jobGroup,
  salary,
}) => {
  return ajaxRequest({
    method: 'post',
    url: '/v1/api/signup',
    body: {
      authorizationCode: code,
      nickname,
      career,
      job,
      jobGroup,
      salary,
    },
  });
};
