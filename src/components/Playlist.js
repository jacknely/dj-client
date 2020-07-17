import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Playlist = () => {
  const { playlist } = useContext(GlobalContext);

  return (
    <div>
      {playlist
        ? playlist.map((playlist) => (
            <p key={playlist.id}>{playlist.title}</p>
          ))
        : null}
    </div>
  );
};
