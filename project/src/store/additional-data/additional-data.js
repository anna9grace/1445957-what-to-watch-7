import { ActionType } from '../action';

const initialState = {
  favoriteFilms: [],
  isFavoriteDataLoaded: false,
  promoFilm: {},
  isPromoDataLoaded: false,
};

const additionalData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload,
        isFavoriteDataLoaded: true,
      };

    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoDataLoaded: true,
      };

    default:
      return state;
  }
};

export {additionalData};
