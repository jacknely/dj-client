import React, { useContext } from "react";
import { SlideItem } from "./SlideItem";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "@material-ui/core";

export const SlideArray = () => {
  const {
    analysis: { energy, vocals, tempo, dancable },
    updateAnalysis,
    recommend,
    analysis,
  } = useContext(GlobalContext);

  return (
    <div>
      <SlideItem
        cat="energy"
        value={energy || [0, 0]}
        onChange={(e) => updateAnalysis({ ...analysis, energy: e })}
      />
      <SlideItem
        cat="vocals"
        value={vocals || [0, 0]}
        onChange={(e) => updateAnalysis({ ...analysis, vocals: e })}
      />
      <SlideItem
        cat="tempo"
        value={tempo || [0, 0]}
        onChange={(e) => updateAnalysis({ ...analysis, tempo: e })}
      />
      <SlideItem
        cat="dancable"
        value={dancable || [0, 0]}
        onChange={(e) => updateAnalysis({ ...analysis, dancable: e })}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => recommend()}
      >
        Recommend
      </Button>
    </div>
  );
};
