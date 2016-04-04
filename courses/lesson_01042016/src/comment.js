import React, { Component, PropTypes } from 'react'

//так пишу обычно
// class Comment extends Component {
//
//     state = {};
//
//     render() {
//         return (
//             <div>
//                 {this.props.comment}
//             </div>
//         )
//     }
// }



//а так пишу глупые компоненты (простые), для них в реакт с 14 версии придумали особый синтаксис - stateless components
function Comment(props) {
    return (
        <div>
            {props.comment}
        </div>
    )
}

export default Comment