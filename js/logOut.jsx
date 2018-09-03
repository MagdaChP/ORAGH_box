import React from 'react';
import ReactDOM from 'react-dom';

export class LogOut extends React.Component {
    render() {
        return (
            <div className="logOut" style={{width: '100vw', height:'100vh', background:'red'}}>
                Wylogowano
            </div>
        )
    }
}
ReactDOM.render(
    <LogOut />,
    document.getElementById('app')
);
