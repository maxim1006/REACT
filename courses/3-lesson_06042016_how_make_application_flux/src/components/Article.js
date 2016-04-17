import React, { Component, PropTypes } from 'react';
import CommentList from "./CommentList";
import { deleteArticleAC }from "../AC/articles";

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
        const {article, openItem, isSelected} = this.props;
        const comment = <div><CommentList comments={article.comments} /></div>;
        const articleText = <p>{article.text}</p>;
        const articleBody = this.props.isOpen ? <div>{articleText} {comment}</div> : null;
        const articleTitleStyle = isSelected ? {color: 'red'} : null;

        return (
            <div>
                <h4 onClick={openItem} style={articleTitleStyle}>{article.title} {this.props.isOpen ? "Close" : "Open"}</h4>
                <p>
                    <span onClick={this.handleSelect}>{isSelected ? 'Deselect article' : 'Select article'}</span>
                </p>
                <p>
                    <span onClick={this.deleteArticle}>Remove this article</span>
                </p>
                <div>{this.props.isOpen ? articleBody : null}</div>
            </div>
        )
    }

    deleteArticle = () => {
        deleteArticleAC(this.props.article.id);
    }; 

    handleSelect = () => {
        const { article: {id}, selectArticle, isSelected} = this.props;

        console.log(isSelected);

        selectArticle(id, isSelected);
    };

}

export default Article;