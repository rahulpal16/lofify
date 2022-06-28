import React, { useState } from "react";
import LibraryMusic from "./LibraryMusic";

export default function Library({
  music,
  setCurrentmusic,
  setIsplaying,
  setMusic,
  librarystatus,
}) {
  const [selectedCategory, setSelectedCategory] = useState("default");
  const hipHopArr = music.filter((track) => {
    return track.category === "hip-hop";
  });
  const indianArr = music.filter((track) => {
    return track.category === "indian";
  });

  return (
    <div className={`library-container ${librarystatus ? "show-library" : ""}`}>
      <div className="library-nav">
        <h2>Library</h2>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="default">Lofi Category:</option>
          <option value="hip-hop">hip-hop</option>
          <option value="indian">Indian Lofi</option>
        </select>
      </div>
      <div className="library-music-container">
        {selectedCategory === "hip-hop"
          ? hipHopArr.map((track) => (
              <LibraryMusic
                key={music.id}
                setCurrentmusic={setCurrentmusic}
                track={track}
                music={music}
                setMusic={setMusic}
                setIsplaying={setIsplaying}
              />
            ))
          : ""}
        {selectedCategory === "default"
          ? music.map((track) => (
              <LibraryMusic
                key={music.id}
                setCurrentmusic={setCurrentmusic}
                track={track}
                music={music}
                setMusic={setMusic}
                setIsplaying={setIsplaying}
              />
            ))
          : ""}
        {selectedCategory === "indian"
          ? indianArr.map((track) => (
              <LibraryMusic
                key={music.id}
                setCurrentmusic={setCurrentmusic}
                track={track}
                music={music}
                setMusic={setMusic}
                setIsplaying={setIsplaying}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
