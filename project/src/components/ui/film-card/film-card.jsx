import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import VideoPlayer from '../video-player/video-player';
import filmProp from '../../pages/film-screen/film.prop';
import {AppRoutes} from '../../../const';


function FilmCard(props) {
  const {film, mouseEnterHandler, mouseLeaveHandler, playingStatus} = props;
  const {name, previewImage, id, previewVideoLink} = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Link to={`${AppRoutes.FILM}/${film.id}`}>
        <div className="small-film-card__image">
          <VideoPlayer
            src={previewVideoLink}
            posterUrl={previewImage}
            playingStatus={playingStatus}
            isPreview
          />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoutes.FILM}/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
  playingStatus: PropTypes.string.isRequired,
};

export default FilmCard;
