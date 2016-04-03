import React, { Component, PropTypes } from 'react';
require("./comment.css");

class Comment extends Component {

    state = {
        isOpen: false
    };

    render() {

        const comment = this.props.comment;

        return (
            <div className="comment">
                <span onClick={this.handleClick}>Комментарий {comment.id}</span>
                <p>{this.state.isOpen ? comment.text : null}</p>
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