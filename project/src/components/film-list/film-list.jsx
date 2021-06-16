import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import filmCardProp from '../film-card/film-card.prop';

function FilmList(props) {
  const {films} = props;

  return (
    <div className="catalog__films-list">
      {
        films.map((film) => {
          const filmId = film.id;

          return (
            <FilmCard
              key={filmId}
              film={film}
            />
          );
        })
      }
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

export default FilmList;
