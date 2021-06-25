export const ActionType = {
  CHANGE_ACTIVE_GENRE: 'filter/changeActiveGenre',
  RESET_ACTIVE_GENRE: 'filter/resetActiveGenre',
  GET_FILMS_LIST: 'filter/getFilmsList',
  GET_FILMS_RENDERED_COUNT: 'filter/getFilmsRenderedCount',
  RESET_FILMS_RENDERED_COUNT: 'filter/resetFilmsRenderedCount',
};

export const ActionCreator = {
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
};
