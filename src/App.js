import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { NewPlaylist, Playlist, SlideArray, Login } from "./components";

import { GlobalProvider } from "./context/GlobalState";

import styles from "./App.module.css";

function App() {
  return (
    <GlobalProvider>
      <Grid container spacing={3} justify="center">
        <Grid item xs>
          <Paper className={styles.paper}>
            <Login />
          </Paper>
          <Paper className={styles.paper}>
            <Playlist />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={styles.paper}>
            <SlideArray />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={styles.paper}>
            <NewPlaylist />
          </Paper>
        </Grid>
      </Grid>
    </GlobalProvider>
  );
}

export default App;
