//Пример создания компонента Hello

import React, {Component} from 'react';

class Hello extends Component {

    getProp() {
        return "property from getProp";
    }

    //у реактовского компонента обязательно должен быть метод render, описывающий вью
    render() {
        return (
            <div>

                <h1>Hello world {this.getProp()}{this.props.prop}</h1>
                <span>Span</span>

            </div>
        )
    }
}

export default Hello;