import React, { Component, PropTypes } from 'react'
import Article from './Article'

class AricleList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.getList()}
                </ul>
            </div>
        )
    }

    getList() {
        return this.props.articles.map((article, index) =>
            <li key={article.id}><Article article = {article} /></li> //можно рендерить кастомный компонент внутри другого компонента, key - нужен для уникальных ключей, в основном тут используются idшники. Нужно для того, чтобы изменение данных фиксировать. Данные в реакте спускаются сверху вниз от родителя к чайлду через this.props
        )
    }
}

export default AricleList