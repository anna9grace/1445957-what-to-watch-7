import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { makeItemsUnique } from '../../../utils/utils';
import { INITIAL_GENRE } from '../../../const';
import { changeActiveGenre, getFilmsList, resetFilmsRenderedCount } from '../../../store/action';
import { getActiveGenre, getFilms } from '../../../store/main-data/selectors';

export const getUniqueGenres = (films) => {
  const genres = films.map((film) => film.genre);
  return makeItemsUnique(genres);
};


function GenresList() {
  const activeGenre = useSelector(getActiveGenre);
  const films = useSelector(getFilms);

  const dispatch = useDispatch();
  const onGenreChange = (genre) => {
    dispatch(changeActiveGenre(genre));
    dispatch(getFilmsList());
    dispatch(resetFilmsRenderedCount());
  };

  const genres = [INITIAL_GENRE, ...getUniqueGenres(films)];

  return (
    <ul className="catalog__genres-list">

      {genres.map((genre) => (
        <li
          className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}
          key={genre}
        >
          <a
            href="link/href"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreChange(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}

    </ul>
  );
}

export default GenresList;
