import {createReducer} from '@reduxjs/toolkit';

import { loadFavoriteFilms, loadPromoFilm } from '../action';

const initialState = {
  favoriteFilms: [],
  isFavoriteDataLoaded: false,
  promoFilm: {},
  isPromoDataLoaded: false,
};

const additionalData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isPromoDataLoaded = true;
    });
});

export {additionalData};
