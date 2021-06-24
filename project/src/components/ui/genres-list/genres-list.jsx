import React from 'react';
import PropTypes from 'prop-types';

import filmProp from '../../pages/film-screen/film.prop';
import { makeItemsUnique } from '../../../utils/utils';


export const getUniqueGenres = (films) => {
  const genres = films.map((film) => film.genre);
  return makeItemsUnique(genres);
};


function GenresList(props) {
  const {films} = props;
  const genres = getUniqueGenres(films);

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="link/href" className="catalog__genres-link">All genres</a>
      </li>

      {genres.map((genre) => (
        <li className="catalog__genres-item" key={genre}>
          <a href="link/href" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

GenresList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default GenresList;
