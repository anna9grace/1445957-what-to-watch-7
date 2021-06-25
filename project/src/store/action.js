export const ActionType = {
  CHANGE_ACTIVE_GENRE: 'filter/changeActiveGenre',
  GET_FILMS_LIST: 'filter/getFilmsList',
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),
  getFilmsList: () => ({
    type: ActionType.GET_FILMS_LIST,
  }),
};


// export const ActionCreator = {
//   incrementStep: () => ({
//     type: ActionType.INCREMENT_STEP,
//     payload: 1,
//   }),
//   resetGame: () => ({
//     type: ActionType.RESET_GAME,
//   }),
// };

// Напишите код для получения списка фильмов определённого жанра. Обратите внимание, в качестве жанра пользователю доступен вариант All genres. В этом случае результатом должен быть полный список фильмов.
