import { ajaxRequest } from './common';

export const postImageNum = ({ imageNum }) => {
  return ajaxRequest({
    method: 'post',
    url: '/v1/api/images',
    body: {
      imageUrl: {
        imageNum,
      },
    },
  });
};
