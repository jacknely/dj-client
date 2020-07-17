import React from "react";
import { Slider, Typography } from "@material-ui/core";

export const SlideItem = (props) => {
  return (
    <div>
      <Typography id="discrete-slider-custom" gutterBottom>
        {props.cat}
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        step={1}
        value={props.value}
        onChange={(e, value) => props.onChange(value)}
      />
    </div>
  );
};
