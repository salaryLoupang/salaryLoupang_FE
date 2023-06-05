import { ajaxRequest } from './common';

export const getLoupang = () => {
  return ajaxRequest({
    method: 'get',
    url: '/v1/api/loupang',
  });
};
