import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom'; //использую для получения ноды в которую вставляется мой компонент

import Comment from './Comment';
import CustomComponent from './CustomComponent';

class CommentList extends Component {

    state = {};

    render() {
        return (
            <div>
                <span onClick={this.handleClick}>CommentList span</span>
                <CustomComponent ref="customComponent" />
                {this.getComments()}
            </div>
        )
    }

    getComments() {
        return this.props.comments.map((comment, idx) => {
            return <Comment comment={comment} key={idx} />
        })
    }

    handleClick = (ev) => {
        console.log(this.refs);
        console.log(findDOMNode(this.refs.customComponent)); //так нахожу ноду в которую вставляется компонент 
    }
}

export default CommentList