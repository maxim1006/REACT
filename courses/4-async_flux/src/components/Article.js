import React, { Component, PropTypes } from 'react';
import CommentList from "./CommentList";
import { loadArticleById }from "../AC/articles";

class Article extends Component {

    state = {};

    static propTypes = {
        article: PropTypes.object.isRequired,
        selectArticle: PropTypes.func.isRequired,
        isSelected: PropTypes.bool,
        openItem: PropTypes.func.isRequired,
        deleteArticleAC: PropTypes.func.isRequired
    };

    //при получении новых свойств применяется этот lifecycle
    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen && !this.props.isOpen && !nextProps.article.text) loadArticleById({id: nextProps.article.id}); //!nextProps.article.text - модный флаг, чтобы проверить загружалась ли уже статья
    }

    render() {
        return (
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article, openItem, isSelected} = this.props;
        const comments = <div><CommentList article={article} ref="commentList" /></div>;
        const articleText = <p>{article.text}</p>;
        const articleBody = this.props.isOpen ? <div>{articleText} {comments}</div> : null;
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
        this.props.deleteArticleAC(this.props.article.id);
    };

    handleSelect = () => {
        const { article: {id}, selectArticle, isSelected} = this.props;
        selectArticle(id, isSelected);
    };

}

export default Article;