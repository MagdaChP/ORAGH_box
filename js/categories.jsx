import React from 'react';
import ReactDOM from 'react-dom';

// let listElements = ['News', 'Kategorie', 'ShitBox', 'Nowy wpis', 'Wyloguj']

export class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // elements: listElements,
        }
    }
    render() {
        return (
            <ul> 
                <li> Koncerty </li>
                <li> Próby </li>
                <li> Sekcje </li>
            </ul>
            )
    }
}
ReactDOM.render(
    <Categories />,
    document.getElementById('app')
);
