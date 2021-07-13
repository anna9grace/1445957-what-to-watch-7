import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { VideoStatus } from '../../../const';


function VideoPlayerFull({ src, posterUrl, playingStatus, isFullMode, isVideoReady, onFullModeEnter, onPlaying, onPause, onProgress, onStart, onReadyStatusChange }) {
  let timerId = null;
  let videoDuration = null;

  const videoRef = useRef();

  const startProgressWatch = () => {
    timerId = setInterval(() => onProgress(videoRef.current.currentTime), 1000);
  };


  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener('loadeddata', () => video.readyState >= 3 && onReadyStatusChange());

    if (!isVideoReady) {
      return;
    }
    video.addEventListener('playing', onPlaying);
    video.addEventListener('pause', onPause);

    return () => {
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('pause', onPause);
    };
  }, [isVideoReady]);


  useEffect(() => {
    const video = videoRef.current;

    if (playingStatus === VideoStatus.PLAYING) {
      if (!videoDuration) {
        videoDuration = video.duration;
        onStart(videoDuration);
      }
      video.play();
      startProgressWatch();
    }

    playingStatus === VideoStatus.PAUSED && video.pause();

    return () => timerId && clearInterval(timerId);
  }, [playingStatus]);


  useEffect(() => {
    if (isFullMode) {
      videoRef.current.requestFullscreen();
      onFullModeEnter();
    }
  }, [isFullMode]);


  return (
    <video
      src={src}
      poster={posterUrl}
      ref={videoRef}
      className='player__video'
    />
  );
}

VideoPlayerFull.propTypes = {
  src: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  playingStatus: PropTypes.string.isRequired,
  isFullMode: PropTypes.bool.isRequired,
  isVideoReady: PropTypes.bool.isRequired,
  onFullModeEnter: PropTypes.func.isRequired,
  onPlaying: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onProgress: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
  onReadyStatusChange: PropTypes.func.isRequired,
};


export default VideoPlayerFull;
