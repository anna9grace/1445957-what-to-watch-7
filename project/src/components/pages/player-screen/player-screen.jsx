import React from 'react';
import {useHistory} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import filmProp from '../film-screen/film.prop';

function PlayerScreen(props) {
  const {filmId, films} = props;
  const {name, backgroundImage, videoLink} = films.find((film) => film.id === +filmId);

  const history = useHistory();

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={backgroundImage}></video>

      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

PlayerScreen.propTypes = {
  filmId: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});


export {PlayerScreen};
export default connect(mapStateToProps, null)(PlayerScreen);
