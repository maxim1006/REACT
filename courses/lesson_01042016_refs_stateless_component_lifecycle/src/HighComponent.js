//пример компонента высшего порядка, те это декоратор, который добавляет какую-то логику к существующему компоненту (как пример добавляет логику WrappedClass.js)

import React, { Component as ReactComponent } from 'react'

export default (Component) => {

    return class HighComponent extends ReactComponent {

        state = {
            isOpen: false
        };

        handleClick = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        };

        render() {
            //Передаю здесь пропсы и стейт, а в комопоненте который этот компонент оборачивает isOpen будет доступен как
            // this.props.isOpen, также и с методом, передаю его как пропс
            //{...this.props} - передаем все остальные пропсы вниз

            return  (
                    <div>
                        Обертка над компонентом
                        <Component {...this.props} isOpen = {this.state.isOpen} handleClick = {this.handleClick}/>
                    </div>
            );

        }
    }
}