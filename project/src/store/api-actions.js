import { ActionCreator } from './action';
import { APIRoute } from '../const';
import { adaptFilmsToClient, adaptFilmToClient } from '../services/adaptors';
import { toast } from 'react-toastify';

import { ToastIDs } from '../const';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({ data }) => dispatch(ActionCreator.loadFilms(adaptFilmsToClient(data))))
    .catch((error) => toast(error.message, {
      toastId: ToastIDs.DATA_GET_ERROR,
    }))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({ data }) => dispatch(ActionCreator.loadPromoFilm(adaptFilmToClient(data))))
    .catch((error) => toast(error.message, {
      toastId: ToastIDs.DATA_GET_ERROR,
    }))
);

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({ data }) => dispatch(ActionCreator.loadFavoriteFilms(adaptFilmsToClient(data))))
    .catch((error) => toast(error.message, {
      toastId: ToastIDs.DATA_GET_ERROR,
    }))
);
