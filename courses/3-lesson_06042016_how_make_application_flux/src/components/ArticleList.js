import React, { Component, PropTypes } from 'react';
import Article from "./Article";
import toggleOpen from "../HOC/toggleOpen";

class ArticleList extends Component {

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
            return <li key={article.id}><Article article={article} isOpen={isOpen(article.id)} openItem={openItem(article.id)}  /></li>
        });
    }

}

export default toggleOpen(ArticleList);