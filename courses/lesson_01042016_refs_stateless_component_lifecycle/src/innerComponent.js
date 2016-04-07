import React, { Component, PropTypes } from 'react';

class InnerComponent extends Component {

    render() {
        return (
            <div>

                <p onClick={this.handleClick}>
                    Внутренний компонент часть 1
                </p>

                <p onClick={this.handleClick}>
                    Внутренний компонент часть 2
                </p>

                <p onClick={this.handleClick}>
                    Внутренний компонент часть 3
                </p>

            </div>
        )
    }

    handleClick = (ev) => {
        this.props.outerCb(ev);
    }
}

export default InnerComponent