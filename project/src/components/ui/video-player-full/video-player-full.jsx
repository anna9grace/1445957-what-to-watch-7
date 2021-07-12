import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { PreviewVideoSizes, VideoStatus } from '../../../const';


function VideoPlayerFull({ src, posterUrl, playingStatus, isFullMode, onFullModeEnter, onPlaying, onPause, onProgress, onPlayStart }) {
  let timerId = null;
  let videoDuration = null;

  const startProgressWatch = () => {
    timerId = setInterval(() => onProgress(videoRef.current.currentTime), 1000);
  };

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.addEventListener('playing', () => {
      onPlaying();
    });

    videoRef.current.addEventListener('pause', () => {
      onPause();
    });
  }, []);

  useEffect(() => {
    const currentPlayer = videoRef.current;
    timerId && clearInterval(timerId);

    if (!currentPlayer) {
      return;
    }

    if (playingStatus === VideoStatus.PLAYING) {

      if (!videoDuration) {
        videoDuration = videoRef.current.duration;
        onPlayStart(videoDuration);
      }
      currentPlayer.play();
      startProgressWatch();
    }

    if (playingStatus === VideoStatus.PAUSED) {
      currentPlayer.pause();
    }

    return () => timerId && clearInterval(timerId);

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
      className='player__video'
    />
  );
}

VideoPlayerFull.propTypes = {
  src: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  playingStatus: PropTypes.string.isRequired,
  isFullMode: PropTypes.bool.isRequired,
  onFullModeEnter: PropTypes.func.isRequired,
  onPlaying: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onProgress: PropTypes.func.isRequired,
  onPlayStart: PropTypes.func.isRequired,
};


export default VideoPlayerFull;
