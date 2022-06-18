import React, { Component } from 'react'
import './chooseSort.css'

export default class ChooseSort extends Component {
  render() {
    return (
      <div className="choose_sort">
        <button onClick={() => this.props.generateNewArray()} id="reset">
          Generate New Array
        </button>
        <button
          id="bubbleSort_btn"
          onClick={() => this.props.bubbleSort()}
          className="btn1"
        >
          Bubble Sort
        </button>
        <button
          id="selectionSort_btn"
          onClick={() => this.props.selectionSort()}
          className="btn2"
        >
          Selection Sort
        </button>
        <button
          id="insertionSort_Btn"
          onClick={() => this.props.insertionSort()}
          className="btn1"
        >
          Insertion Sort
        </button>
      </div>
    );
  }
}
