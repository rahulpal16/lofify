import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeUp,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export default function Player({
  currentMusic,
  isplaying,
  setIsplaying,
  music,
  setMusic,
  setCurrentmusic,
}) {
  for (let e of document.querySelectorAll(
    'input[type="range"].slider-progress'
  )) {
    e.style.setProperty("--value", e.value);
    e.style.setProperty("--min", e.min == "" ? "0" : e.min);
    e.style.setProperty("--max", e.max == "" ? "100" : e.max);
    e.addEventListener("input", () => e.style.setProperty("--value", e.value));
  }
  const [mp3url, setMp3url] = useState("");
  useEffect(() => {
    const activeMusic = music.map((mus) => {
      if (mus.id === currentMusic.id) {
        return {
          ...mus,
          active: true,
        };
      } else {
        return {
          ...mus,
          active: false,
        };
      }
    });
    setMusic(activeMusic);
    getYoutubemp3(currentMusic.id);
  }, [currentMusic]);

  const [musicinfo, setMusicinfo] = useState({
    currentTime: "",
    duration: "",
  });

  const audioRef = useRef(null);

  //  event handlers

  const audioPlayHandler = () => {
    if (!isplaying) {
      audioRef.current.play();
      setIsplaying(true);
    } else {
      audioRef.current.pause();
      setIsplaying(false);
    }
  };

  const timeUpdatehandler = async (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setMusicinfo({
      ...musicinfo,
      currentTime: current, //timeFormat(current),
      duration: duration, //timeFormat(duration),
    });
  };
  const draghandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setMusicinfo({ ...musicinfo, currentTime: e.target.value });
  };

  const timeFormat = (timestamp) => {
    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - hours * 60;
    const seconds = Math.floor(timestamp % 60);

    var formatted =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");
    return formatted;
  };
  // if (musicinfo.currentTime === musicinfo.duration) {
  //   setIsplaying(false);
  // }

  if (isplaying) {
    audioRef.current.play();
  }
  const trackSkippingHandler = (direction) => {
    const currentIndex = music.findIndex(
      (track) => track.id === currentMusic.id
    );

    if (direction === "skip-back") {
      setCurrentmusic(music[(currentIndex - 1) % music.length]);
      if ((currentIndex - 1) % music.length === -1) {
        setCurrentmusic(music[music.length - 1]);
        return;
      }
    }
    if (direction === "skip-forward") {
      setCurrentmusic(music[(currentIndex + 1) % music.length]);
    }
  };

  const getYoutubemp3 = async (videoid) => {
    const response = await fetch(
      `https://yt-dl.prajjwalkapoor.repl.co/fetchAudio?videoURL=https://www.youtube.com/watch?v=${videoid}`
    );
    const data = await response.json();

    setMp3url(data[0].url);
  };
  return (
    <div className="player-container">
      <div className="time-control">
        <p>{timeFormat(musicinfo.currentTime || 0)}</p>
        <input
          className="styled-slider slider-progress"
          type="range"
          min={0}
          max={musicinfo.duration || 0}
          value={musicinfo.currentTime}
          onChange={draghandler}
        />
        <p>{timeFormat(musicinfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <label htmlFor="volume">
          {" "}
          <FontAwesomeIcon
            className="skip-forward"
            icon={faVolumeUp}
            size="2x"
          />
        </label>
        <input
          className="volume styled-slider slider-progress"
          id="volume"
          min={0}
          max={1}
          step={0.01}
          type="range"
          onChange={(e) => (audioRef.current.volume = e.target.value)}
        />
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => trackSkippingHandler("skip-back")}
          icon={faAngleLeft}
          size="2x"
        />

        {musicinfo.duration ? (
          <FontAwesomeIcon
            className="play"
            icon={!isplaying ? faPlay : faPause}
            size="2x"
            onClick={audioPlayHandler}
          />
        ) : (
          <FontAwesomeIcon icon={faSpinner} size="2x" className="spinner" />
        )}
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => trackSkippingHandler("skip-forward")}
        />
      </div>

      <audio
        onTimeUpdate={timeUpdatehandler}
        onLoadedMetadata={timeUpdatehandler}
        ref={audioRef}
        src={mp3url}
        onEnded={() => {
          trackSkippingHandler("skip-forward");
        }}
      ></audio>
    </div>
  );
}
