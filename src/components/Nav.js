import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
export default function Nav({ librarystatus, setLibrarystatus }) {
  return (
    <nav>
      <h1>Lofify: Lofi Music Player</h1>
      <button
        className="btn"
        onClick={() => {
          if (!librarystatus) {
            setLibrarystatus(true);
          } else if (librarystatus) {
            setLibrarystatus(false);
          }
        }}
      >
        <FontAwesomeIcon className="icon" icon={faMusic} />
        {librarystatus ? "Close Library" : "Open Library"}
      </button>
    </nav>
  );
}
