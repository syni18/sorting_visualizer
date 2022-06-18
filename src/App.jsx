import React, { Component } from 'react'
import './app.css'

import {randomInterval} from './RequireFunction'

import Header from './Interface/header/Header'
import ChooseSort from './Interface/chooseBtn/ChooseSort'
import ArrayBar from './Interface/arrayBars/ArrayBar'
import RangeSlider from './Interface/sliderRanges/RangeSlider'

import BubbleSort from './component/bubbleSortAlgo/BubbleSort'
import SelectionSort from './component/selectionSortAlgo/SelectionSort'
import InsertionSort from './component/insertionSortAlgo/InsertionSort'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      animationSpeed: 50,
      arraySize: 8,
    };
    this.generateNewArray = this.generateNewArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.selectionSort = this.selectionSort.bind(this);
    this.insertionSort = this.insertionSort.bind(this);
    this.onChangeRangeSlider = this.onChangeRangeSlider.bind(this);
    this.onChangeSpeedSlider = this.onChangeSpeedSlider.bind(this);
  }

  componentDidMount() {
    this.generateNewArray();
  }

  generateNewArray() {
    const array = [];
    for (let i = 0; i < this.state.arraySize; i++) {
      array.push(randomInterval(5, 70));
    }
    this.setState({ array: array });
  };

  onChangeRangeSlider = (event,value)=> {
    this.setState({arraySize:value});
    this.generateNewArray();
  };

  onChangeSpeedSlider = (event,value)=> {
    this.setState({ animationSpeed: value });
  };

  bubbleSort = () => {
    BubbleSort(this.state.array, this.state.animationSpeed);
  };

  selectionSort =() => {
    SelectionSort(this.state.array, this.state.animationSpeed);
  };

  insertionSort = () => {
    InsertionSort(this.state.array, this.state.animationSpeed);
  };

  render() {
    return (
    <div className='vizual_container'>
        <Header />
        <ChooseSort
           generateNewArray={this.generateNewArray}
           bubbleSort={this.bubbleSort}
           selectionSort={this.selectionSort}
           insertionSort={this.insertionSort} />

        <ArrayBar array={this.state.array} />
        <RangeSlider
            arraySize={this.state.arraySize}
            animationSpeed={this.state.animationSpeed}
            onChangeRangeSlider={this.onChangeRangeSlider}
            onChangeSpeedSlider={this.onChangeSpeedSlider} />
    </div>
    )
  }
}
