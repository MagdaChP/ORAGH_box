import React from 'react';
import ReactDOM from 'react-dom';
import { ArticleWrapper } from './articleWrapper';
import { Navigation } from './navigation';

export class Section extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            postItem: []
        }
    }
    addNewPost = (newPost) => {
        console.log('hgyg', this.state);
        this.setState({
            postItem: this.state.postItem.concat(newPost)
        }, () => {
            console.log(this.state.postItem);
        })
    }
    render() {
        return (
            <section className="row">
                    <Navigation history={this.props.history} addPostMethod={this.addNewPost}/>
                    <ArticleWrapper articleList={this.state.postItem}/>
            </section>)
    }
}
ReactDOM.render(
    <Section />,
    document.getElementById('app')
);
