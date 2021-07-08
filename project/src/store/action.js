export const ActionType = {
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO_FILM: 'data/loadPromoFilm',
  LOAD_FAVORITE_FILMS: 'data/loadFavoriteFilms',
  CHANGE_ACTIVE_GENRE: 'filter/changeActiveGenre',
  RESET_ACTIVE_GENRE: 'filter/resetActiveGenre',
  GET_FILMS_LIST: 'filter/getFilmsList',
  GET_FILMS_RENDERED_COUNT: 'filter/getFilmsRenderedCount',
  RESET_FILMS_RENDERED_COUNT: 'filter/resetFilmsRenderedCount',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const  loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film,
});

export const loadFavoriteFilms = (films) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: films,
});


export const changeActiveGenre = (genre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  payload: genre,
});

export const resetActiveGenre = () => ({
  type: ActionType.RESET_ACTIVE_GENRE,
});


export const getFilmsList = () => ({
  type: ActionType.GET_FILMS_LIST,
});

export const getFilmsRenderedCount = () => ({
  type: ActionType.GET_FILMS_RENDERED_COUNT,
});

export const resetFilmsRenderedCount = () => ({
  type: ActionType.RESET_FILMS_RENDERED_COUNT,
});


export const requireAuthorization = (status, data) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: {
    authStatus: status,
    authInfo: data ? data : {},
  },
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

