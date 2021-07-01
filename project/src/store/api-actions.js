import { ActionCreator } from './action';
import { APIRoute, AuthorizationStatus } from '../const';
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
    .catch((error) => toast(error.message))
);

export const chekAuth = (isInitial) => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch((error) => {
      if (!isInitial) {
        toast(error.message);
      }
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(({data}) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch((error) => toast(error.message))
);



// export const logout = () => (dispatch, _getState, api) => (
//   api.delete(APIRoute.LOGOUT)
//     .then(() => localStorage.removeItem('token'))
//     .then(() => dispatch(ActionCreator.logout()))
// );
