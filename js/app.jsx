import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
 } from 'react-router-dom';
 import { createBrowserHistory } from 'history';
 import Redirect from 'react-router/Redirect';
 
 import { Header } from './header.jsx';
 import { Section } from './section.jsx';
 import { Footer } from './footer.jsx';
 import { LoginPage } from './loginPage.jsx';
 
 const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', function () {
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                login: false
            }
        }
        render() {
            return (
                <Router history={history}>
                    <div className="app">
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path='/' component={LoginPage} />
                                <Route exact path='/section' component={Section} />
                            </Switch>
                        </div>
                    <Footer />
                    </div>
                </Router >
            )
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});