import React, { Component, PropTypes } from 'react';
import Article from "./Article";
import { articleStore } from "../stores";
import AppDispatcher from '../dispatcher';


class ArticleList extends Component {

    articleTitle = '';
    articleText = '';

    state = this.getState();

    getState() {
        return {
            articles: articleStore.getAll()
        }
    }
    
    componentDidMount() {
        articleStore.addChangeListener(this.changeArticles)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.changeArticles)
    }

    changeArticles = () => {
        this.setState(this.getState());
    };

    render() {
        const errorBlock = this.state.error ? <p>{this.state.errorText}</p> : null;

        return (
            <div>
                <div>
                    <input onChange={this.setArticleTitle} id="articleInputTitle" type="text" placeholder="Введи заголовок статьи *" ref="articleInputTitle"/><br />
                    <input id="articleInputText" type="text" placeholder="Введи текст статьи *" ref="articleInputText" onChange={this.setArticleText} /><br />
                    <button onClick={this.addArticle}>add Article</button>
                </div>

                {errorBlock}
                
                <ul>
                    {this.getArticleList()}
                </ul>
            </div>
        )
    }

    setArticleTitle = (ev) => {
        this.articleTitle = ev.target.value;
    };

    setArticleText = (ev) => {
        this.articleText = ev.target.value;
    };

    addArticle = () => {

        if (this.articleTitle && this.articleText) {
            AppDispatcher.dispatch({
                type: "ADD_ARTICLE",
                data: {
                    id: this.generateRandomAlphaNum(24),
                    title: this.articleTitle,
                    text: this.articleText

                }
            });

            this.setState({
                error: false
            });

            this.refs.articleInputText.value = '';
            this.refs.articleInputTitle.value = '';
            this.articleTitle = '';
            this.articleText = '';

        } else {
            this.setState({
                error: true,
                errorText: "Вы не заполнили либо title, либо text"
            });
        }


    };

    getArticleList() {
        return this.state.articles.map((article, index) => {
            return <li key={article.id}><Article index={index} article={article} /></li>
        })
    }

    generateRandomAlphaNum(len) {
        var rdmString = "";
        for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
        return  rdmString.substr(0, len);
    }
}

export default ArticleList