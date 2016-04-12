import React, { Component, PropTypes } from 'react';
import Comment from "./Comment";
import singleOpen from "../HOC/singleOpen";

//При изменении стейта происходит ререндеринг всего вью, т.е. выполнится еще раз  this.getComments()
// isOpen и  openItem - получаю из HOC singleOpen, первый получает значение, которое передаю в коммент, второй передает колбек, который дергаю в комменте. Тут все пробрасывается следующим образом: из хок в лист из листа в коммент. В коммент уже попадает ev => this.setState({openItemId}), который меняет стейт листа, лист перерисовывается и так как на его уровне хранится открытый коммент, то он все закрывает и открывает нужный
class CommentList extends Component {

    render() {
        return (
            <div>
                <span onClick={this.handleClick}>Click</span>
                <ul>
                    {this.getComments()}
                </ul>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
             prop: 1
        });
    };

    getComments() {
        console.log(this);
        const {isOpen, openItem} = this.props;

        return this.props.comments.map((comment, idx) => {
            console.log("Проверка ререндеринга");
            return <li key={idx}>
                <Comment comment={comment} isOpen={isOpen(idx)} openItem={openItem(idx)} />
            </li>
        });
    }

}

export default singleOpen(CommentList);