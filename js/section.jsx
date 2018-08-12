import React from 'react';
import ReactDOM from 'react-dom';
import { ArticleWrapper } from './articleWrapper.jsx';
import { Navigation } from './navigation.jsx';

export class Section extends React.Component {
    render() {
        return (
            <section className="row">
                    <Navigation />
                    <ArticleWrapper />
            </section>)
    }
}
ReactDOM.render(
    <Section />,
    document.getElementById('app')
);
