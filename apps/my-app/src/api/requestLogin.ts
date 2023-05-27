import { ajaxRequest } from './common';

export const postLogin = ({ code }: { code: string }) => {
  return ajaxRequest({
    method: 'post',
    url: '/v1/api/login',
    body: { authorizationCode: code },
  });
};
