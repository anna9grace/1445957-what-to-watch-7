import { toast } from 'react-toastify';

import { api } from '../index';
import {ResponseCode } from '../const';


export const fetchFilmInfo = (url, onSuccess, onNotFound) => (
  api.get(`${url}`)
    .then(({ data }) => onSuccess(data))
    .catch((error) => {
      if (onNotFound && error.response.status === ResponseCode.NOT_FOUND) {
        onNotFound();
        return;
      }
      toast(error.message);
    })
);
