import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {AppRoutes, AuthorizationStatus} from '../../../const';
import { systemLogout } from '../../../store/api-actions';
import { getAuthInfo, getAuthStatus } from '../../../store/user/selectors';

const renderUserBlockAuthorized = (history, userData, onLogout) => (
  <React.Fragment>
    <li className="user-block__item">
      <div
        className="user-block__avatar"
        onClick={() => history.push(`${AppRoutes.MY_LIST}`)}
      >
        <img src={userData.avatar_url} alt="User avatar" width="63" height="63" />
      </div>
    </li>
    <li className="user-block__item">

      <Link
        className="user-block__link"
        onClick={(evt) => {
          evt.preventDefault();
          onLogout();
        }}
        to='/'
      >
        Sign out
      </Link>
    </li>
  </React.Fragment>
);

const renderUserBlockUnauthorized = () => (
  <Link
    className="user-block__link"
    to={AppRoutes.SIGN_IN}
  >
    Sign in
  </Link>
);


function UserBlock(props) {
  const {authorizationStatus, authInfo, onLogout} = props;

  const history = useHistory();

  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH
          ? renderUserBlockAuthorized(history, authInfo, onLogout)
          : renderUserBlockUnauthorized()
      }
    </ul>
  );
}

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authInfo: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
  authInfo: getAuthInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(systemLogout());
  },
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
