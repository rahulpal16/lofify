import React from "react";

export default function LibraryMusic({
  track,
  setCurrentmusic,
  music,
  setIsplaying,
  setMusic,
}) {
  const songSelecthandler = () => {
    const selectedMusic = music.filter(
      (selectedTrack) => selectedTrack.id === track.id
    );
    setCurrentmusic(selectedMusic[0]);
    setIsplaying(true);

    const activeMusic = music.map((mus) => {
      if (mus.id === track.id) {
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
  };
  return (
    <div
      className={`track ${track.active ? "selected-music" : ""}`}
      onClick={songSelecthandler}
    >
      <div className="library-music">
        <img src={track.cover} alt="" />
        <div className="library-title">
          <h3>{track.name}</h3>
          <h4>{track.artist}</h4>
        </div>
      </div>
    </div>
  );
}
