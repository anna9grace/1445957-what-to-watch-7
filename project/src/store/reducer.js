import { ActionType } from './action';
import { INITIAL_GENRE } from '../const';
import films from '../mocks/films';

const initialState = {
  activeGenre: INITIAL_GENRE,
  filteredFilms: films,
  films: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
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

export {reducer};
