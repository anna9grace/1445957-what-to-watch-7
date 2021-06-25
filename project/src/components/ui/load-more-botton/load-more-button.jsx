import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { ActionCreator } from '../../../store/action';

function LoadMoreButton(props) {
  const {onShowMoreClick} = props;

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

LoadMoreButton.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(ActionCreator.getFilmsRenderedCount());
  },
});

export {LoadMoreButton};
export default connect(null, mapDispatchToProps)(LoadMoreButton);
