import React, { Component, PropTypes } from 'react';
import CommentList from "./CommentList";

class Article extends Component {

    state = {};

    render() {
        return (
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, openItem} = this.props;
        const comment = <div><CommentList comments={article.comments} /></div>;
        const articleText = <p>{article.text}</p>;
        const articleBody = this.props.isOpen ? <div>{articleText} {comment}</div> : null;

        return (
            <div>
                <h4 onClick={openItem}>{article.title} {this.props.isOpen ? "Close" : "Open"}</h4>
                <p>{this.props.isOpen ? articleBody : null}</p>
            </div>
        )
    }

}

export default Article;