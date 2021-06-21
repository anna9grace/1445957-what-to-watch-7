import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const videoSizes = {
  WIDTH: 280,
  HEIGHT: 175,
};

function VideoPlayer({src, posterUrl, isPlaying}) {
  const videoRef = useRef();

  useEffect(() => {
    const currentPlayer = videoRef.current;
    let playTimeout = null;

    if (currentPlayer && isPlaying) {
      playTimeout = setTimeout(() => {
        currentPlayer.play();
      }, 1000);
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
      width={videoSizes.WIDTH}
      height={videoSizes.HEIGHT}
    />
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};


export default VideoPlayer;
