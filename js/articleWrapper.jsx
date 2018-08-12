import React from 'react';
import ReactDOM from 'react-dom';
import { SingleArticle } from './singleArticle.jsx';

export class ArticleWrapper extends React.Component {
    render() {
        return (
            <div className="col-xs-5">
                <div className="articleWrapper">
                    <SingleArticle />
                    <SingleArticle />
                    <SingleArticle />
                </div>
            </div>)
    }
}
ReactDOM.render(
    <ArticleWrapper />,
    document.getElementById('app')
);
