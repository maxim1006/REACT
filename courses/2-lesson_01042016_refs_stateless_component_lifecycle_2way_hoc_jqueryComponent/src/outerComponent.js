//В связке с InnerComponent показывает как работает обратный биндинг от чайлда к родителю

import React, { Component, PropTypes } from 'react';
import InnerComponent from './InnerComponent';

class OuterComponent extends Component {

    state = {
        array: [],
        some: "123",
        clickedElement: ''
    };

    render() {
        return (
            <div>
                <p>
                    Узнаю из родителя, что кликнули во внутреннем компоненте на: {this.getClickedNumber()}
                </p>
                <InnerComponent outerCb={this.pushInArrayFromInnerComponent} />
            </div>
        )
    }

    getClickedNumber() {
        return this.state.clickedElement; //если бы сделал без стейтов, то не произошел бы rerender, поэтому использую стейт  
    }

    pushInArrayFromInnerComponent = (valueFromInnerComponent, target) => {
        let self = this;
        //тут принимаю дату от чайлда и фигарю в стейт родителя
        this.setState({
            array: self.state.array.concat(valueFromInnerComponent),
            clickedElement: valueFromInnerComponent
        }, () => {
            console.log('self.state.array', self.state.array);
        }); //вторым аргументом колбек на setState, который - асинхронный

        this.getClickedNumber();
    }
}

export default OuterComponent;