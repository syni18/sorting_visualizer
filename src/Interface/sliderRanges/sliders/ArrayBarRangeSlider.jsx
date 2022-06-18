import React, { Component } from "react";
import { Slider } from "@mui/material";
import "./ArrayBarRangeSlider.css";


const ArrayBarSlider = (Slider);

export default class ArrayBarRangeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arraySize: this.props.arraySize,
    };
  }
  render() {
    return (
      <div className="range-slider-container">
        <p id="text-array-size">Array Size</p>
        <ArrayBarSlider
          id="arrayBarSlider"
          min={2}
          max={12}
          step={1}
          defaultValue={this.state.arraySize}
          valueLabelDisplay="auto"
          marks
          onChange={this.props.onChangeRangeSlider}
          onChangeCommitted={this.props.onChangeRangeSlider}
        />
      </div>
    );
  }
}
