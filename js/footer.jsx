import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="row">
                <span> Stopka </span>
            </footer>)
    }
}
ReactDOM.render(
    <Footer />,
    document.getElementById('app')
);
