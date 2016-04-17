//нужен для взаимодействия между ArticleList и ArticleStore

import React, { Component, PropTypes } from 'react';
import { articleStore } from "../stores";
import ArticleList from "./ArticleList";

class ArticleListContainer extends Component {

    state = {};

    constructor() {
        super();

        this.state = this.getState();
    }

    getState() {
        return {
            articles: articleStore.getAll()
        }
    }

    //для того, чтобы делать ререндеринг подписываюсь на lifecycle hook, в нем добавляю листенер, который будет всегда оповещать, что стейт поменялся
    componentDidMount() {
        articleStore.addChangeListener(this.changeArticles);
    }

    //неважно, что изменилось, читаю все статьи заново и обновляю стейт
    changeArticles = () => {
        this.setState(this.getState());
    };

    render() {
        return (
            <ArticleList articles = {this.state.articles}/>
        )
    }
}

export default ArticleListContainer;