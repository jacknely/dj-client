import React, { useContext, useState } from "react";
import { TextField, Button, withStyles } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalState";

const StyledButton = withStyles({
  root: {
    margin: "15px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export const Login = () => {
  const { load } = useContext(GlobalContext);
  const [user, setUser] = useState("");
  const [playlist, setPlaylist] = useState("");

  const onSubmit = (e) => {
    load(user, playlist);
  };

  return (
    <div>
      <form className="form" noValidate autoComplete="off">
        <TextField
          id="username"
          label="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          id="playlist"
          label="Playlist"
          value={playlist}
          onChange={(e) => setPlaylist(e.target.value)}
        />
        <StyledButton
          styles="padding:20px;"
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          LOAD
        </StyledButton>
      </form>
    </div>
  );
};
