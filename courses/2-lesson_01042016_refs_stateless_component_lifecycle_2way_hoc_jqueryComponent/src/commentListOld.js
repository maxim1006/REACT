//Старый подход
import React from 'react';

const CommentListOld = React.createClass({
    //это хук для стейта в старом стиле
    getInitialState() {
        return {
            isOpen: false
        }
    },

    // state: {
    //     isOpen: false
    // },

    render() {
        return (
            <div>
                <span onClick={this.handleClick}>{this.state.isOpen ? "Скрыть комментарии" : "Показать комментарии"}</span>
                {this.state.isOpen ? this.getComments() : null}
            </div>
        );
    },

    getComments() {
        return this.props.comments.map((comment) => {
            return <div key={comment.id}><Comment comment={comment} /></div>
        })
    },

    handleClick(ev) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
});

export default CommentList