import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { ActionCreator } from '../../../store/action';
import {fetchFavoriteFilmsList} from '../../../store/api-actions';
import {AppRoute} from '../../../const';

function UserAvatar(props) {
  const {onPageRedirect} = props;

  return (
    <div className="user-block__avatar">
      <Link
        to={AppRoute.MY_LIST}
        onClick={onPageRedirect}
      >
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </Link>
    </div>
  );
}

UserAvatar.propTypes = {
  onPageRedirect: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onPageRedirect() {
    dispatch(ActionCreator.resetIsDataLoaded());
    dispatch(fetchFavoriteFilmsList());
  },
});

export {UserAvatar};
export default connect(null, mapDispatchToProps)(UserAvatar);
