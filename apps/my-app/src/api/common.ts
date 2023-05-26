import axios from 'axios';

export const URL = { API_SERVER: 'http://175.45.205.235:8080' };

export const ajaxRequest = ({
  method,
  contentType,
  url,
  param,
  querystring,
  body,
}) => {
  let axiosOptions = {
    method,
    url: `${URL.API_SERVER}${url}${param ? `/${param}` : ''}`,
  };

  if (body) {
    axiosOptions.data = body;
  }

  if (querystring) {
    axiosOptions.data = querystring;
  }

  return axios(axiosOptions);
};
