import React, { Component, PropTypes } from 'react';
import AppDispatcher from '../dispatcher';

class Article extends Component {

    state = {};

    render() {
        return (
            <div>
                <h3>
                    {this.props.article.title}&nbsp;
                    <a href="#" onClick={this.deleteArticle}>Delete</a>
                </h3>
                <p>{this.props.article.text}</p>
            </div>
        )
    }

    deleteArticle = (ev) => {
        ev.preventDefault();

        let index = this.props.index;

        AppDispatcher.dispatch({
            type: "DELETE_ARTICLE", //обязательный параметр
            data: { index }
        });
    }
}

export default Article