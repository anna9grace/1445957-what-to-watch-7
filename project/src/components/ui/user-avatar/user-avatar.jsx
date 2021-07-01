import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../const';

function UserAvatar(props) {

  return (
    <div className="user-block__avatar">
      <Link
        to={AppRoute.MY_LIST}
      >
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </Link>
    </div>
  );
}

export default UserAvatar;
