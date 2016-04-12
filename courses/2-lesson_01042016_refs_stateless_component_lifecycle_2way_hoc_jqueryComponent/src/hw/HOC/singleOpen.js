//HOC - high order component
import React, { Component as ReactComponent } from 'react';

export default (Component) => {

    return class singleOpen extends ReactComponent {

        state = {
            openItemId: null //в хок задаю все абстрактное, например стейт назвал абстрактно
        };

        //openItem = openItemId => ev => this.setState({openItemId});   //это тоже что и
        /*
             openItem = function openItem(openItemId) {
                 return function (ev) {
                    return null.setState({openItemId: openItemId});
                 };
             };
         */

        openItem = (openItemId) => {
            return (ev) => {
                return this.setState({openItemId: openItemId});
            };
        };

        isOpen = id => this.state.openItemId === id;

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