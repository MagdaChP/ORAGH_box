import React from 'react';
import ReactDOM from 'react-dom';


export class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'koncerty',
            title: '',
            description: ''
        }
    }
    changeCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }
    showTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    showDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    newPost = (e) => {
        e.preventDefault();
        let newPost = {
            title: this.state.title,
            text: this.state.description,
            category: this.state.category
        }
        console.log(newPost);
        if (typeof this.props.addPost == 'function') {
            console.log('kliknięcie');
            this.props.addPost(newPost);
        }
    }
    dismissPost = (e) => {
        console.log('dismiss post button');
        this.props.hide();

    }
    render() {
        return (
            <form>
                <label> Wybierz kategorię:
                <select value={this.state.select} onChange={this.changeCategory}>
                        {/* {this.state.category.map((elem, index) => {
                            return <option key={`categoriesList-${index}`}> {elem} </option>
                        })} */}
                        <option>Koncerty</option>
                        <option>Próby</option>
                        <option>Sekcje</option>
                    </select>
                </label>
                <label> Podaj tutuł wpisu:
                <input type="text" value={this.state.title} onChange={this.showTitle} />
                </label>
                <label> Treść wpisu:
                <textarea type="text" value={this.state.description} onChange={this.showDescription} />
                </label>
                <button onClick={this.newPost}> Dodaj </button>
                <button onClick={this.dismissPost}> Anuluj </button>
            </form>
        )
    }
}
ReactDOM.render(
    <AddPost />,
    document.getElementById('app')
);
