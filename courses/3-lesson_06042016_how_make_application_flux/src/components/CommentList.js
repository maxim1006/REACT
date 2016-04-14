import React, { Component, PropTypes } from 'react';
import Comment from "./Comment";

class CommentList extends Component {

    state = {};

    render() {
        return (
            <div>
                <ul>
                    {this.getBody()}
                </ul>
            </div>
        )
    }

    getBody() {
        return this.props.comments.map((comment, idx) => {
            return <li key={comment.id}><Comment text={comment.text} /></li>
        });
    }
}

export default CommentList