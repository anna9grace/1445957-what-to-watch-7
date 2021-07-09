import React from 'react';
import {useDispatch} from 'react-redux';

import { getFilmsRenderedCount } from '../../../store/action';

function LoadMoreButton() {
  const dispatch = useDispatch();
  const onShowMoreClick = () => {
    dispatch(getFilmsRenderedCount());
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
}

export default LoadMoreButton;
