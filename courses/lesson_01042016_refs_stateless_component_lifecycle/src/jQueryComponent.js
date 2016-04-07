//так подключаю jQuery плагин, или что-то что мутирует дом извне

import React, { Component, PropTypes } from 'react'

class JqueryComponent extends Component {
    componentDidMount() {
        console.log('do jQuery logic here');
        console.log($);
        console.log(this.refs, 'this.refs from JqueryComponent');
        $('body').append("appended via jQuery")
    }

    render() {
        return (
            <div ref="container" />
        )
    }
}

export default  JqueryComponent