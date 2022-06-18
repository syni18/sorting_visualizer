import React, { Component } from "react";
import { Slider } from "@mui/material";
import "./arrayBarSpeedSlider.css";

const AnimationSpeedSlider = (Slider);
export default class ArrayBarSpeedSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationSpeed: this.props.animationSpeed,
    };
  }

  render() {
    return (
      <div className="range-slider-container">
        <p id="text-animation-speed">Animation Speed (ms)</p>
        <AnimationSpeedSlider
          id="animationSpeedSlider"
          min={10}
          max={200}
          defaultValue={this.state.animationSpeed}
          valueLabelDisplay="auto"
          onChangeCommitted={this.props.onChangeSpeedSlider}
        />
      </div>
    );
  }
}
