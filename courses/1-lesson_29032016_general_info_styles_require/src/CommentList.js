import React, { Component, PropTypes } from 'react';
import Comment from './comment/Comment';

class CommentList extends Component {

    state = {
        isOpen: false
    };

    render() {
        return (
            <div>
                <span onClick={this.handleClick}>{this.state.isOpen ? "Скрыть комментарии" : "Показать комментарии"}</span>
                {this.state.isOpen ? this.getComments() : null}
            </div>
        );
    }

    getComments() {
        return this.props.comments.map((comment) => {
            return <div key={comment.id}><Comment comment={comment} /></div>
        })
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default CommentList