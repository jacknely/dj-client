import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Intial State
const intialState = {
  user: "",
  listName: "",
  playlist: "",
  recommended: "",
  analysis: {
    energy: [50, 50],
    vocals: [50, 50],
    tempo: [50, 50],
    dancable: [50, 50],
  },
};

//Create context

export const GlobalContext = createContext(intialState);

// Provider so that apps can access
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  function updateAnalysis(newAnalysis) {
    dispatch({
      type: "UPDATE_ANALYSIS",
      payload: newAnalysis,
    });
  }

  function load(user, listName) {
    dispatch({
      type: "LOAD",
      user,
      listName,
    });
  }

  function recommend() {
    dispatch({
      type: "RECOMMEND",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        playlist: state.playlist,
        analysis: state.analysis,
        recommended: state.recommended,
        user: state.user,
        listName: state.listName,
        updateAnalysis,
        load,
        recommend,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
