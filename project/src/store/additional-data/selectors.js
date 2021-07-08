import {NameSpace} from '../root-reducer';

export const getFavoriteFilms = (state) => state[NameSpace.ADDITIONAL].favoriteFilms;
export const getFavoriteDataStatus = (state) => state[NameSpace.ADDITIONAL].isFavoriteDataLoaded;
export const getPromoFilm = (state) => state[NameSpace.ADDITIONAL].promoFilm;
export const getPromoDataStatus = (state) => state[NameSpace.ADDITIONAL].isPromoDataLoaded;

