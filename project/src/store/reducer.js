import { ActionType } from './action';
import { INITIAL_GENRE, MAX_FILMS_COUNT, AuthorizationStatus } from '../const';

const initialState = {
  activeGenre: INITIAL_GENRE,
  films: [],
  filteredFilms: [],
  favoriteFilms: [],
  promoFilm: {},
  renderedFilmsCount: MAX_FILMS_COUNT,
  isDataLoaded: false,
  isPromoDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        filteredFilms: action.payload,
        isDataLoaded: true,
      };

    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoDataLoaded: true,
      };

    case ActionType.LOAD_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload,
        isDataLoaded: true,
      };

    case ActionType.CHANGE_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };

    case ActionType.RESET_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: INITIAL_GENRE,
      };

    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        filteredFilms: state.activeGenre === INITIAL_GENRE
          ? state.films
          : state.films.filter((film) => film.genre === state.activeGenre),
      };

    case ActionType.GET_FILMS_RENDERED_COUNT:
      return {
        ...state,
        renderedFilmsCount: Math.min(state.filteredFilms.length, state.renderedFilmsCount + MAX_FILMS_COUNT),
      };

    case ActionType.RESET_FILMS_RENDERED_COUNT:
      return {
        ...state,
        renderedFilmsCount: MAX_FILMS_COUNT,
      };

    case ActionType.REQUIRED_AUTHORIZATION :
      return {
        ...state,
        authorizationStatus: action.payload.authStatus,
        authInfo: action.payload.authInfo,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    default:
      return state;
  }
};

export { reducer };

