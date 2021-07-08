import { ActionType } from '../action';
import { INITIAL_GENRE, MAX_FILMS_COUNT } from '../../const';

const initialState = {
  activeGenre: INITIAL_GENRE,
  films: [],
  filteredFilms: [],
  renderedFilmsCount: MAX_FILMS_COUNT,
  isDataLoaded: false,
};

const mainData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        filteredFilms: action.payload,
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

    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        filteredFilms: state.activeGenre === INITIAL_GENRE
          ? state.films
          : state.films.filter((film) => film.genre === state.activeGenre),
      };

    default:
      return state;
  }
};

export {mainData};
