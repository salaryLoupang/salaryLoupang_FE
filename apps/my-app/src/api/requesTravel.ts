import { ajaxRequest } from './common';

export const getTravel = () => {
  return ajaxRequest({ method: 'get', url: '/v1/api/travel' });
};
