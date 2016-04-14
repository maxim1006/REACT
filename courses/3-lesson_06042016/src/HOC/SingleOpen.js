//HOC - high order component
import React, { Component as ReactComponent } from 'react';

export default (Component) => {

    return class singleOpen extends ReactComponent {

        state = {
            articleOpenId: null
        };

        openItem = (articleOpenId) => (ev) => this.setState({articleOpenId});

        isOpen = (id) => {
            return this.state.articleOpenId === id;
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