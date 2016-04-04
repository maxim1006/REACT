//Старый подход
import React, { Component, PropTypes } from 'react'

class Comment extends Component {

    state = {};

    render() {
        return (
            <div>
                {this.props.comment}
            </div>
        )
    }
}

export default Comment