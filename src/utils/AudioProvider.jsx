import React, { createContext, useState, useContext, useEffect } from 'react';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [audio, setAudio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [src, setSrc] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleDurationChange = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audio]);

const startPlaying = (newSrc) => {
  if (newSrc) {
    // If a new source is provided, set it on the audio element and start playing
    setSrc(newSrc);
    audio.src = newSrc;
  } else if (!audio.src) {
    // If no new source is provided and the audio element doesn't have a source, log an error
    console.error('No source provided and no source set on audio element');
    return;
  }
  // If a new source is not provided, but the audio element already has a source, resume playing
  audio.play();
};

  const stopPlaying = () => {
    audio.pause();
    console.log(src)
  };

  return (
    <AudioContext.Provider value={{ isPlaying, startPlaying, stopPlaying, src, duration, currentTime }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}