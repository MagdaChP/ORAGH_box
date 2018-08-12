import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
    render() {
        return (
            <header className="row">
                <div className="col-xs-6">
                        <h1><span>ORKIESTRA REPREZENTACYJNA AGH </span></h1>
                        <h2> <span> - prasa niecodzienna </span> </h2>
                </div>
            </header>)
    }
}
ReactDOM.render(
    <Header />,
    document.getElementById('app')
);

