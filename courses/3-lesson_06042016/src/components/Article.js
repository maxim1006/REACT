import React, { Component, PropTypes } from 'react';

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

        return (
            <div>
                <h4 onClick={openItem}>{article.title} {this.props.isOpen ? "Close" : "Open"}</h4>
                <p>{this.props.isOpen ? article.text : null}</p>
            </div>
        )
    }

}

export default Article;