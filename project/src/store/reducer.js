import { ActionType } from './action';
import { INITIAL_GENRE, MAX_FILMS_COUNT} from '../const';
import films from '../mocks/films';

const initialState = {
  activeGenre: INITIAL_GENRE,
  filteredFilms: films,
  films: films,
  renderedFilmsCount: MAX_FILMS_COUNT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export {reducer};

