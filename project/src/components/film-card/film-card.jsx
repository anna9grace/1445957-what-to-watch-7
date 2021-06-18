import React from 'react';
import filmProp from '../film-screen/film.prop';
import PropTypes from 'prop-types';

function FilmCard(props) {
  const {film, mouseEnterHandler, mouseLeaveHandler} = props;
  const {name, previewImage} = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
};

export default FilmCard;
