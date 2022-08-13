import { Component } from "react";

const withToggle = (WrappedComponent) => {
    class WithToggle extends Component {
        state = {
            toggleStatus: false
        }

        toggle = () => {
            this.setState({
                toggleStatus: !this.state.toggleStatus
            })
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    toggle={this.toggle}
                    toggleStatus={this.state.toggleStatus}
                />
            )
        }
    }

    return WithToggle
}

export default withToggle;