import React, { Component, PropTypes } from 'react';
import SingleOpen from "../HOC/SingleOpen"

class Comment extends Component {

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
                <span onClick={this.props.openItem}>{this.props.isOpen ? "Close comment" : "Open comment"}</span>&nbsp;
                <span onClick={this.handleRemove}>Delete comment</span>
                {this.props.isOpen ? text : null}
            </div>
        );
    }

    handleRemove = () => {
        this.props.deleteComment(this.props.article.id, this.props.comment.id);
    }
}

export default Comment;