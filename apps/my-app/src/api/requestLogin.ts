import { ajaxRequest } from './common';

export const postLogin = ({ code }: { code: string }) => {
  return ajaxRequest({
    method: 'post',
    url: '/v1/api/login',
    body: { authorizationCode: code },
  });
};

export const postSignUp = ({ nickname, career, job, jobGroup, salary }) => {
  return ajaxRequest({
    method: 'post',
    url: '/v1/api/signup',
    body: {
      params: {
        nickname,
        career,
        job,
        jobGroup,
        salary: salary || 0,
      },
    },
  });
};
