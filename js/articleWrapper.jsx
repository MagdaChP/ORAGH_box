import React from 'react';
import ReactDOM from 'react-dom';
import { SingleArticle } from './singleArticle.jsx';

export class ArticleWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleListEl: this.props.articleList
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            articleListEl: nextProps.articleList
        })
    }
    render() {
        return (
            <div className="col-xs-5">
                <div className="articleWrapper">
                    {console.log('props ze state', this.state.articleListEl)}
                    { this.state.articleListEl !== undefined &&
                        this.state.articleListEl.map((e) => {
                            console.log(e.title);
                            console.log('map');
                            return <SingleArticle postText={e.text} postTitle={e.title} postCategory={e.category} />
                        })
                    }


                </div>
            </div>)
    }
}
ReactDOM.render(
    <ArticleWrapper />,
    document.getElementById('app')
);
