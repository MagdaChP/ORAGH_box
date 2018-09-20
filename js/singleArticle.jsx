import React from 'react';
import ReactDOM from 'react-dom';
import { ArticleHeader } from './articleHeader.jsx';

export class SingleArticle extends React.Component {
    render() {
        return (
            <article>
                <ArticleHeader headerTitle={this.props.postTitle} headerCategory={this.props.postCategory}/>
                <p>{this.props.postText}</p>
            </article>)
    }
}
ReactDOM.render(
    <SingleArticle />,
    document.getElementById('app')
);



