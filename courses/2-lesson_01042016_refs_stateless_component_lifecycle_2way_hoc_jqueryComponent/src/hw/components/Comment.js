import React, { Component, PropTypes } from 'react';

class Comment extends Component {

    render() {

        const {openItem} = this.props;

        return (

            <div>
                <span onClick={openItem}>{this.props.isOpen ? "Close" : "Open"}</span>
                <p>
                    {this.getBody()}
                </p>
            </div>

        )
    }

    getBody() {
        console.log(this);
        if (!this.props.isOpen) return null;

        return this.props.comment
    }

}

export default Comment;