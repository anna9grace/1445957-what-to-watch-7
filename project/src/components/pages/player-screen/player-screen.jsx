import React, {useState} from 'react';
import {useHistory} from 'react-router';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import { getFilms } from '../../../store/main-data/selectors';
import VideoPlayer from '../../ui/video-player/video-player';
import PlayButton from '../../ui/play-button/play-button';
import PauseButton from '../../ui/pause-button/pause-button';

function PlayerScreen(props) {
  const {filmId} = props;
  const films = useSelector(getFilms);
  const {name, backgroundImage, videoLink} = films.find((film) => film.id === +filmId);

  const history = useHistory();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="player">
      <VideoPlayer
        src={videoLink}
        posterUrl={backgroundImage}
        isPlaying={isPlaying}
        playerClass='player__video'
      />
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

          {
            isPlaying
              ? <PauseButton onPause={() => {
                setIsPlaying(false);
              }}/>
              : <PlayButton onPlay={() => {
                setIsPlaying(true);
              }}/>
          }

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
};


export default PlayerScreen;
