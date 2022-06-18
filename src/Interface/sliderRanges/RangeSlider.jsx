import React, { Component } from 'react'
import './rangeSlider.css'
import ArrayBarRangeSlider from './sliders/ArrayBarRangeSlider'
import ArrayBarSpeedSlider from './sliders/ArrayBarSpeedSlider'

export default class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arraySize: this.props.arraySize,
      animationSpeed: this.props.animationSpeed,
    };
  }
  render() {
    return (
      <div id="range_slider">
        <div className="column">
          <ArrayBarRangeSlider
             arraySize={this.state.arraySize}
             onChangeRangeSlider={this.props.onChangeRangeSlider} />
        </div>
        <div className="column">
          <ArrayBarSpeedSlider
             animationSpeed={this.state.animationSpeed}
             onChangeSpeedSlider={this.props.onChangeSpeedSlider} />
        </div>

      </div>
    )
  }
}
