//В связке с OuterComponent показывает как работает обратный биндинг от чайлда к родителю

import React, { Component, PropTypes } from 'react';

class InnerComponent extends Component {

    render() {
        return (
            <div>

                <p onClick={this.handleClick.bind(this, 1)}>
                    Внутренний компонент часть 1
                </p>

                <p onClick={this.handleClick.bind(this, 2)}>
                    Внутренний компонент часть 2
                </p>
 
                <p onClick={this.handleClick.bind(this, 3)}>
                    Внутренний компонент часть 3
                </p>

            </div>
        )
    }

    //обрабатываю тут клик и меняю cb у родителя
    handleClick = (idx, ev) => {
        this.props.outerCb(idx, ev.target); //через эти пропсы передаю дату в родитель
    }
}

export default InnerComponent