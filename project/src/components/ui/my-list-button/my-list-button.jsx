import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import { updateIsFavoriteStatus } from '../../../store/api-actions';
import { getPromoFilm } from '../../../store/main-data/selectors';
import { getCurrentFilm } from '../../../store/film-data/selectors';

const renderInListIcon = () => (
  <svg viewBox="0 0 18 14" width="18" height="14">
    <use xlinkHref="#in-list"></use>
  </svg>
);

const renderAddToListIcon = () => (
  <svg viewBox="0 0 19 20" width="19" height="20">
    <use xlinkHref="#add"></use>
  </svg>
);

function MyListButton(props) {
  const dispatch = useDispatch();

  const {filmId} = props;
  const promoFilm = useSelector(getPromoFilm);
  const currentFilm = useSelector(getCurrentFilm);
  const isPromo = promoFilm && promoFilm.id === +filmId;
  const isCurrent = currentFilm && currentFilm.id === +filmId;

  const isFavorite = isPromo
    ? promoFilm.isFavorite
    : currentFilm.isFavorite;

  const onMyListClick = () => {
    dispatch(updateIsFavoriteStatus(filmId, isCurrent, isPromo, isFavorite ? 0 : 1));
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onMyListClick}
    >
      {isFavorite ? renderInListIcon() : renderAddToListIcon()}
      <span>My list</span>
    </button>
  );
}

MyListButton.propTypes = {
  filmId: PropTypes.string.isRequired,
};

export default MyListButton;
