import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from "react-router";

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    showEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    showPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    signIn = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        console.log('klik');

        firebase.auth().signInWithEmailAndPassword(email, password).then((resp) => {
            console.log(resp);
            this.setState({
                login: true
            }, () => {
                console.log(this.state)
                this.props.history.push('/section')
            })
        }).catch((error) => {
            this.setState({
                login: false
            })
            console.log('error: ', error)
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
    render() {
        return (
            <div className="loginForm">
                Zaloguj się!
            {(this.state.login == false) && <span> Błędne dane </span>}
                <form>
                    <label> E-mail:
                    <input type="email" value={this.state.email} onChange={this.showEmail} />
                    </label>
                    <label> Hasło:
                    <input type="password" value={this.state.password} onChange={this.showPassword} />
                    </label>
                    <button onClick={this.signIn}> Zaloguj </button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(
    <LoginPage />,
    document.getElementById('app')
);
