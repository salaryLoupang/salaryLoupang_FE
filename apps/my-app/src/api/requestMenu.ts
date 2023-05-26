import { ajaxRequest } from './common';

export const getMenu = () => {
  return ajaxRequest({ method: 'get', url: '/v1/api/menu' });
};
