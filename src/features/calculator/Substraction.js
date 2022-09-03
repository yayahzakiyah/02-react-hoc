import React, { Component } from 'react'
import WithCalc from '../../shared/WithCalc'

class Substraction extends Component {
  render() {
    return (
      <div>
        <h2>Result of substraction from {this.props.num1} and {this.props.num2}</h2>
        {this.props.data}
      </div>
    )
  }
}

export default WithCalc(Substraction, (num1, num2) => {
  return Number(num1) -Number(num2)
})