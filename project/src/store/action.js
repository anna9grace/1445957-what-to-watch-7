export const ActionType = {
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO_FILM: 'data/loadPromoFilm',
  LOAD_FAVORITE_FILMS: 'data/loadFavoriteFilms',
  CHANGE_ACTIVE_GENRE: 'filter/changeActiveGenre',
  RESET_ACTIVE_GENRE: 'filter/resetActiveGenre',
  GET_FILMS_LIST: 'filter/getFilmsList',
  GET_FILMS_RENDERED_COUNT: 'filter/getFilmsRenderedCount',
  RESET_FILMS_RENDERED_COUNT: 'filter/resetFilmsRenderedCount',
  RESET_IS_DATA_LOADED: 'data/resetIsDataLoaded',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }),
  loadFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films,
  }),
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),
  resetActiveGenre: () => ({
    type: ActionType.RESET_ACTIVE_GENRE,
  }),
  getFilmsList: () => ({
    type: ActionType.GET_FILMS_LIST,
  }),
  getFilmsRenderedCount: () => ({
    type: ActionType.GET_FILMS_RENDERED_COUNT,
  }),
  resetFilmsRenderedCount: () => ({
    type: ActionType.RESET_FILMS_RENDERED_COUNT,
  }),
  resetIsDataLoaded: () => ({
    type: ActionType.RESET_IS_DATA_LOADED,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
