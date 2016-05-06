import React, { Component, PropTypes } from 'react';
import Comment from './Comment';
import toggleOpen from '../HOC/toggleOpen';
import { addComment, deleteComment } from '../AC/comments';

class CommentList extends Component {
    state = {
        commentText: '',
        isOpen: false
    };

    render() {
        return (
            <div>
                {this.getLink()}
                {this.state.isOpen ? this.getBody() : null}
            </div>
        )
    }

    getLink() {
        const text = this.state.isOpen ? 'close comments' : 'open comments';
        return <a href="#" onClick = {this.toggleOpen}>{text}</a>
    }

    toggleOpen = (ev) => {
        ev.preventDefault();

        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    getBody() {
        const { article , openItem, isOpen } = this.props;
        const comments = article.getRelation('comments');
        if (!comments) return null;
        const commentItems = comments.map(comment => 
            <li key={comment.id}>
                <Comment 
                    deleteComment={this.deleteComment} 
                    article={article} 
                    comment={comment} 
                    isOpen={isOpen(comment.id)}
                    openItem={openItem(comment.id)}/>
            </li>);
        return <ul>
            {commentItems}
            <li>{this.getCommentInput()}</li>
        </ul>
    }

    getCommentInput() {
        return  <form onSubmit={this.addComment}>
                    <label>new comment: </label>
                    <input type="text" value={this.state.commentText} onChange = {this.handleChange}/>
                </form>
    }

    deleteComment = (...args) => {
        deleteComment(...args);
    };

    addComment = (ev) => {
        ev.preventDefault();
        addComment(this.state.commentText, this.props.article.id);
        this.setState({
            commentText: ''
        })
    };

    handleChange = (ev) => {
        this.setState({
            commentText: ev.target.value
        })
    }
}

export default toggleOpen(CommentList)