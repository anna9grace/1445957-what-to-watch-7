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

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({ data }) => dispatch(ActionCreator.loadPromoFilm(adaptFilmToClient(data))))
    .catch((error) => toast(error.message))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({ data }) => dispatch(ActionCreator.loadPromoFilm(adaptFilmToClient(data))))
    .catch((error) => toast(error.message, {
      toastId: ToastIDs.DATA_GET_ERROR,
    }))
);

export const fetchSimilarFilmsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}/${APIRoute.SIMILAR_FILMS}`)
    .then(({ data }) => dispatch(ActionCreator.loadPromoFilm(adaptFilmToClient(data))))
    .catch((error) => toast(error.message))
);

export const fetchFilmReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({ data }) => dispatch(ActionCreator.loadPromoFilm(adaptFilmToClient(data))))
    .catch((error) => toast(error.message))
);

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({ data }) => dispatch(ActionCreator.loadFavoriteFilms(adaptFilmsToClient(data))))
    .catch((error) => toast(error.message))
);

export const chekAuth = (isInitial) => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({ data }) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch((error) => {
      if (!isInitial) {
        toast(error.message);
      }
    })
);

export const login = (authData) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { ...authData })
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      return data;
    })
    .then((data) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch((err) => toast(err))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .catch((error) => toast(error.message))
);
