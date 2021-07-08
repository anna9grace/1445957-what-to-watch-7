import {createReducer} from '@reduxjs/toolkit';

import { loadFilms, changeActiveGenre, resetActiveGenre, getFilmsList, getFilmsRenderedCount, resetFilmsRenderedCount } from '../action';
import { INITIAL_GENRE, MAX_FILMS_COUNT } from '../../const';

const initialState = {
  activeGenre: INITIAL_GENRE,
  films: [],
  filteredFilms: [],
  renderedFilmsCount: MAX_FILMS_COUNT,
  isDataLoaded: false,
};

const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteDataLoaded = true;
      state.films = action.payload;
      state.filteredFilms = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(changeActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(resetActiveGenre, (state) => {
      state.activeGenre = INITIAL_GENRE;
    })
    .addCase(getFilmsList, (state) => {
      state.filteredFilms = state.activeGenre === INITIAL_GENRE
        ? state.films
        : state.films.filter((film) => film.genre === state.activeGenre);
    })
    .addCase(getFilmsRenderedCount, (state) => {
      state.renderedFilmsCount = Math.min(state.filteredFilms.length, state.renderedFilmsCount + MAX_FILMS_COUNT);
    })
    .addCase(resetFilmsRenderedCount, (state) => {
      state.renderedFilmsCount = MAX_FILMS_COUNT;
    });
});

export {mainData};
