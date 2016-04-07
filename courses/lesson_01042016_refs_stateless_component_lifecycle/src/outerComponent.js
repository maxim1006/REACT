import React, { Component, PropTypes } from 'react';
import InnerComponent from './InnerComponent';

class OuterComponent extends Component {

    state = {
        array: [],
        some: "123"
    };

    render() {
        return (
            <div>
                <InnerComponent outerCb={this.pushInArrayFromInnerComponent} />
            </div>
        )
    }

    pushInArrayFromInnerComponent = (valueFromInnerComponent) => {
        console.log(this.state.array);
        console.log(this.state.some);
        this.setState({
            array: this.state.array.push(123)
        })
    }
}

export default OuterComponent;