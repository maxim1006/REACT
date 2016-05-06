import React, { Component, PropTypes } from 'react';
import SingleOpen from "../HOC/SingleOpen"

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
        const text = <p>{this.props.comment.text}</p>;

        return (
            <div>
                <span onClick={this.handleClick}>{this.state.isOpen ? "Close comment" : "Open comment"}</span>&nbsp;
                <span onClick={this.handleRemove}>Delete comment</span>
                {this.state.isOpen ? text : null}
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    handleRemove = () => {
        this.props.deleteComment(this.props.article.id, this.props.comment.id);
    }
}

export default Comment;