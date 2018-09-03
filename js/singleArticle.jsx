import React from 'react';
import ReactDOM from 'react-dom';
import { ArticleHeader } from './articleHeader';

export class SingleArticle extends React.Component {
    render() {
        return (
            <article>
                <ArticleHeader />
                <p>{this.props.postText}</p>
            </article>)
    }
}
ReactDOM.render(
    <SingleArticle />,
    document.getElementById('app')
);



