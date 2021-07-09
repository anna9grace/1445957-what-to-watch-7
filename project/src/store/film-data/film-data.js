import {createReducer} from '@reduxjs/toolkit';

import { loadFilm, loadReviews, loadSimilarFilms, setIsLoaded, setCommentIsSending } from '../action';

const initialState = {
  currentFilm: null,
  reviews: [],
  similarFilms: null,
  isFilmDataLoaded: false,
  isCommentSending: false,
};

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilm, (state, action) => {
      state.currentFilm = action.payload;
      state.isFilmDataLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setIsLoaded, (state) => {
      state.isFilmDataLoaded = true;
    })
    .addCase(setCommentIsSending, (state, action) => {
      state.isCommentSending = action.payload;
    });
});

export {filmData};
