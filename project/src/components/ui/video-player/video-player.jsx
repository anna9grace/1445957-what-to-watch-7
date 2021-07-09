import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import { PreviewVideoSizes, PREVIEW_VIDEO_DELAY } from '../../../const';


function VideoPlayer({src, posterUrl, isPlaying, playerClass}) {
  const videoRef = useRef();

  useEffect(() => {
    const currentPlayer = videoRef.current;
    let playTimeout = null;

    if (currentPlayer && isPlaying) {
      playTimeout = setTimeout(() => {
        currentPlayer.play();
      }, PREVIEW_VIDEO_DELAY);
    }

    return (() => {
      clearTimeout(playTimeout);
      currentPlayer.load();
    });

  }, [isPlaying]);

  return (
    <video
      src={src}
      poster={posterUrl}
      ref={videoRef}
      muted
      width={PreviewVideoSizes.WIDTH}
      height={PreviewVideoSizes.HEIGHT}
      className={playerClass ?? ''}
    />
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  playerClass: PropTypes.string,
};


export default VideoPlayer;
