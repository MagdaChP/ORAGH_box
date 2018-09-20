import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="row">
                <div className="fbIcon"> <a href="https://www.facebook.com/oragh/"> <img src="../images/fbIcon.svg" /> </a> </div>
            </footer>)
    }
}
ReactDOM.render(
    <Footer />,
    document.getElementById('app')
);
