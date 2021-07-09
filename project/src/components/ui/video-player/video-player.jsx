import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { PreviewVideoSizes, PREVIEW_VIDEO_DELAY, VideoStatus } from '../../../const';


function VideoPlayer({ src, posterUrl, playingStatus, isPreview, playerClass, isFullMode, onFullModeEnter, onPlaying, onPause }) {
  const videoRef = useRef();

  useEffect(() => {
    if (!isPreview) {
      videoRef.current.addEventListener('playing', () => {
        onPlaying();
      });

      videoRef.current.addEventListener('pause', () => {
        onPause();
      });
    }
  }, []);

  useEffect(() => {
    const currentPlayer = videoRef.current;
    let playTimeout = null;

    if (!currentPlayer) {
      return;
    }

    if (isPreview) {
      if (playingStatus === VideoStatus.PLAYING) {
        playTimeout = setTimeout(() => {
          currentPlayer.play();
        }, PREVIEW_VIDEO_DELAY);
      }

      return (() => {
        clearTimeout(playTimeout);
        currentPlayer.load();
      });
    }

    if (playingStatus === VideoStatus.PLAYING) {
      currentPlayer.play();
    }

    if (playingStatus === VideoStatus.PAUSED) {
      currentPlayer.pause();
    }

  }, [playingStatus]);


  useEffect(() => {
    if (isFullMode && onFullModeEnter) {
      videoRef.current.requestFullscreen();
      onFullModeEnter();
    }
  }, [isFullMode]);

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
  playingStatus: PropTypes.string.isRequired,
  isPreview: PropTypes.bool.isRequired,
  playerClass: PropTypes.string,
  isFullMode: PropTypes.bool,
  onFullModeEnter: PropTypes.func,
  onPlaying: PropTypes.func,
  onPause: PropTypes.func,
};


export default VideoPlayer;
