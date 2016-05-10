import React, { Component, PropTypes } from 'react';
import Article from "./Article";
import toggleOpen from "../HOC/toggleOpen";

class ArticleList extends Component {

    state = {
        selectedArticles: []
    };

    //тут описываю, какие именно пропсы ожидает этот компонент, можем указать, какого они вида: обязательные или нет. Если что не так с пропсами, реакт выдает warning.
    static propTypes = {
        articles: PropTypes.array.isRequired, //сказал, что articles должен быть array и это свойство обязательно
        deleteArticleAC: PropTypes.func.isRequired
    };

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
        const {openItem, isOpen} = this.props;

        return this.props.articles.map((article, index) => {
            return <li key={article.id}>
                <Article
                    article={article}
                    isOpen={isOpen(article.id)}
                    openItem={openItem(article.id)}
                    selectArticle={this.selectArticle}
                    deleteArticleAC = {this.props.deleteArticleAC}
                    isSelected={this.state.selectedArticles.includes(article.id)}
                />
            </li>
        });
    }

    selectArticle = (id, isSelected) => {
        const selectedArticles = this.state.selectedArticles;
        let selectedArticlesNew;

        if (isSelected) {
            selectedArticles.splice(selectedArticles.indexOf(id), 1);
            selectedArticlesNew = selectedArticles;
        } else {
            selectedArticlesNew = selectedArticles.concat(id);
        }

        this.setState({
            selectedArticles: selectedArticlesNew
        });
    }

}

export default toggleOpen(ArticleList);