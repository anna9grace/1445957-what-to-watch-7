import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import filmProp from '../../pages/film-screen/film.prop';
import { makeItemsUnique } from '../../../utils/utils';
import { INITIAL_GENRE } from '../../../const';
import { changeActiveGenre, getFilmsList, resetFilmsRenderedCount } from '../../../store/action';


export const getUniqueGenres = (films) => {
  const genres = films.map((film) => film.genre);
  return makeItemsUnique(genres);
};


function GenresList(props) {
  const {films, activeGenre, onGenreChange} = props;
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

GenresList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  activeGenre: DATA.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(changeActiveGenre(genre));
    dispatch(getFilmsList());
    dispatch(resetFilmsRenderedCount());
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
