import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';

class Article extends Component {

    state = {                   //отвечает за состояние самого компонента, например если хочу show/hide сделать, это зарезервиривонное свойство this.state, всегда обращаюсь к стейт через this.setState({}) - она вызывает перестроение виртуального дома. Она выполниться с задержкой. Так задаю стейт.
        isOpen: false
    };

    render() {
        const { title, text} = this.props.article;
        const comments = <CommentList comments={this.props.article.comments} />;
        const body = this.state.isOpen ? <section>{text} {comments}</section> : null; //если стейт - опен, то отрендериваю боди, если нет, то null - пусто
        //вывожу данные в фигурных скобках


        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        //this.state. = ... - никогда так не делать
        //this.props. = ... - никогда так не делать
        //делаю так, чтобы устанавливать стейт
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article