import React from 'react'
import { Component } from 'react'

const WithCalc = (WrappedComp, calculation) => {
  class HOC extends Component{
    state = {
        result: 0
    };

    doPrintResult = (result) => {
        this.setState({
            result: Number(result)
        })
    }

    componentDidMount(){
        this.doPrintResult(calculation(this.props.num1, this.props.num2))
    }

    render(){
        return <WrappedComp data={this.state.result} {...this.props}/>
    }
  }

  return HOC
}

export default WithCalc

