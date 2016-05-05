//Пример создания компонента Hello

import React, {Component} from 'react';

class Hello extends Component {

    state = {
        isOpen: true
    };

    getProp() {
        console.log("prop"); //этот пример показывает, что при изменении стейта ререндерится весь компонент
        return "property from getProp";
    }

    //у реактовского компонента обязательно должен быть метод render, описывающий вью
    render() {
        return (
            <div>

                <h1>Hello world {this.getProp()}{this.props.prop}</h1>
                <span onClick={this.handleClick}>Span</span>

            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });

        console.log("clicked");
    }
}

export default Hello;