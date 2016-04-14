import React, { Component, PropTypes } from 'react';

class Comment extends Component {

    state = {
        isOpen: false
    };

    render() {
        return (
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const text = <p>{this.props.text}</p>;

        return (
            <div>
                <span onClick={this.handleClick}>{this.state.isOpen ? "Close comment" : "Open comment"}</span>
                {this.state.isOpen ? text : null}
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Comment