//HOC - high order component
import React, { Component as ReactComponent } from 'react';

export default (Component) => {

    return class singleOpen extends ReactComponent {

        state = {
            openItemId: null, //в хок задаю все абстрактное, например стейт назвал абстрактно
        };


        openItem = (id) => {
            return (ev) => {
                // console.log('id ', id);
                // console.log('this.state.openItemId ', this.state.openItemId);
                const openItemId = id === this.state.openItemId ? null : id;
                this.setState({
                    openItemId: openItemId
                });

            };
        };

        isOpen = id => {
            return this.state.openItemId === id;
        };

        render() {
           
            return  (
                <div>
                    <Component {...this.props}
                        isOpen = {this.isOpen}
                        openItem = {this.openItem}
                    />
                </div>
            );

        }
    }
}