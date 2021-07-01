import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../../const';

const renderUserBlockAuthorized = (history) => (
  <React.Fragment>
    <li className="user-block__item">
      <div
        className="user-block__avatar"
        onClick={() => history.push(`${AppRoute.MY_LIST}`)}
      >
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </li>
    <li className="user-block__item">
      <a className="user-block__link">Sign out</a>
    </li>
  </React.Fragment>
);

const renderUserBlockUnauthorized = () => (
  <Link
    className="user-block__link"
    to={AppRoute.SIGN_IN}
  >
    Sign in
  </Link>
);


function UserBlock(props) {
  const {authorizationStatus, authInfo} = props;

  const history = useHistory();
  console.log(authInfo);

  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH
          ? renderUserBlockAuthorized(history)
          : renderUserBlockUnauthorized()
      }
    </ul>
  );
}

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authInfo: PropTypes.object,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authInfo: state.authInfo,
});


export {UserBlock};
export default connect(mapStateToProps, null)(UserBlock);
