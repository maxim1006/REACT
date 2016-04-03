import React, {Component} from 'react';

class CustomComponent extends Component {

    render() {
        return (
             <div>
                 {this.getParagraphs()}
             </div>
        );
    }

    getParagraphs() {
        return this.props.paragraphs.map((paragraph) => {
             return <p key={paragraph}>{paragraph}</p>
        });
    }

}

export default CustomComponent;