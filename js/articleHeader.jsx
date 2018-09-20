import React from 'react';
import ReactDOM from 'react-dom';

export class ArticleHeader extends React.Component {
    render() {
        return (
            <div className="articleHeader">
                <div className="personPhoto">  </div>
                <div className="articleTitleWraper">
                    <h3> {this.props.headerTitle} ({this.props.headerCategory}) </h3>
                    <h4> Imię Nazwisko </h4>
                </div>
            </div>)
    }
}
ReactDOM.render(
    <ArticleHeader />,
    document.getElementById('app')
);