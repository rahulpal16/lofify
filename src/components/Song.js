import React from "react";
export default function Song({ currentMusic, isplaying }) {
  return (
    <div className="song-container">
      <img
        src={currentMusic.cover}
        className={isplaying ? "rotate-animation" : ""}
        alt=""
      />
      <h1>{currentMusic.name}</h1>
      <h4>{currentMusic.artist}</h4>
    </div>
  );
}
