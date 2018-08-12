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
        this.state({
            category: e.target.value
        })
    }
    showTitle = (e) => {
        {
            this.state({
                title: e.target.value
            })
        }
    }
    showDescription = (e) => {
        this.state({
            description: e.target.value
        })
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
                <button> Dodaj </button>
                <button> Anuluj </button>
            </form>
        )
    }
}
ReactDOM.render(
    <AddPost />,
    // <AddPost categories={['koncerty', 'próby', 'sekcje', 'kotłownia']} />,
    document.getElementById('app')
);
