//пример компонента обернутого в декоратор

import React, { Component, PropTypes } from 'react';
import HighComponent from './HighComponent';

class WrappedComponent extends Component {

    render() {
        return (
            <div classID="wrappedComponent" className="wrappedComponent">
                <span onClick={this.props.handleClick}>Внутренности компонента который обернули</span>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        return this.props.isOpen ? " открытый стейт" : " закрытый стейт"; //тут пропсы берутся из компонента обертки,
        // причем стоит обратить внимание, что тут ни стейт ни handleClick не указан, они прокидываются сюда через
        // пропсы
    }
}

export default HighComponent(WrappedComponent);