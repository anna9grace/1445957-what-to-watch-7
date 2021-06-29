import {ActionCreator} from './action';
import {APIRoute} from '../const';
import {adaptFilmsToClient} from '../services/adaptors';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(adaptFilmsToClient(data))))
);

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteFilms(adaptFilmsToClient(data))))
);

