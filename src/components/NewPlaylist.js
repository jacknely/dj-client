import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "@material-ui/core";

export const NewPlaylist = () => {
  const { recommended } = useContext(GlobalContext);

  return (
    <div>
      {recommended
        ? recommended.map((recommended) => (
            <p key={recommended.id}>{recommended.title}</p>
          ))
        : null}
      {recommended ? (
        <Button variant="contained" color="primary">
          Export
        </Button>
      ) : null}
    </div>
  );
};
