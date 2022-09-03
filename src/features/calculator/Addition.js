import React, { Component } from 'react'
import WithCalc from '../../shared/WithCalc'

class Addition extends Component {
  render() {
    return (
      <div>
        <h2>Result of addition from {this.props.num1} and {this.props.num2}</h2>
        {this.props.data}
      </div>
    )
  }
}

export default WithCalc(Addition, (num1, num2) => {
    return Number(num1) + Number(num2)
})
