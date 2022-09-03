import React, { Component } from 'react'
import Addition from '../features/calculator/Addition';
import Substraction from '../features/calculator/Substraction';

class CalcHoc extends Component {
    state = {
        num1: 0,
        num2: 0,
        res: null
    }

    handleInputNum1 = (ev) => {
        this.setState({
            num1: ev.target.value
        })
    }

    handleInputNum2 = (ev) => {
        this.setState({
            num2: ev.target.value
        })
    }
  
    render() {
        const {num1, num2, res} = this.state
    return (
      <div>
        <input onChange={this.handleInputNum1}/>
        <input onChange={this.handleInputNum2}/>
        <button onClick={() => {
            this.setState({res: <Addition key={new Date()} num1={num1} num2={num2}/>});
        }}>+</button>
        <button onClick={() => {
            this.setState({res: <Substraction key={new Date()} num1={num1} num2={num2}/>});
        }}>-</button>
        {res}
      </div>
    )
  }
}

export default CalcHoc