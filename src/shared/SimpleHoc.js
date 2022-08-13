const { Component } = require("react");

const SimpleHoc = WrappedComponent => {
    class HOC extends Component{
        render() {
            return <WrappedComponent/>
        }
    }

    return HOC
}

export default SimpleHoc