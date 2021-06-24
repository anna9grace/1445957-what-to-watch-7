// import { genres } from '../const';
import { ActionType } from './action';
import films from '../mocks/films';

const initialState = {
  activeGenre: 'All genres',
  filteredFilms: films,
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
        filteredFilms: state.activeGenre === 'All genres'
          ? initialState.filteredFilms
          : initialState.films.filter((film) => film.genre === state.activeGenre),
      };

    default:
      return state;
  }
};

export {reducer};
