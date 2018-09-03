import React from 'react';
import ReactDOM from 'react-dom';
import { Categories } from './categories';
import { AddPost } from './addPost';

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: false,
            addPost: false,
            menuOpen: false,
        }
    }
    showCategories = () => {
        this.setState({
            categories: !this.state.categories
        })
    }
    addPost = () => {
        this.setState({
            addPost: !this.state.addPost
        })
    }
    changeClass = () => {
        //console.log('klikam w hamburgera');
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }
    logOut = () => {
        console.log('przycisk wyloguj')
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
                console.log('wylogowano', this.props.history);
                this.props.history.push('/logOut');
          }).catch(function(error) {
            // An error happened.
            console.log('cokolwiek', error);
          });
    }
    render() {
        return (
            <nav>
                <asside className="menuWrapper">
                    <div className="mobileMenu" onClick={this.changeClass}>
                        <span> Aktualna kategoria </span>
                    </div>
                    <ul className={`bigMenu ${this.state.menuOpen ? 'active' : ''}`}>
                        <li id="news" key="menuElements-00"> Aktualności  </li>

                        <li id="categories" key="menuElements-01" onClick={this.showCategories}> Kategorie
                            <div style={{ display: this.state.categories ? 'block' : 'none' }}>
                                <Categories />
                            </div>
                        </li>

                        <li id="shitBox" key="menuElements-02"> ShitBox </li>

                        <li id="newPost" key="menuElements-03" onClick={this.addPost}> Nowy wpis </li>
                        <div className="addPostWraper" style={{ display: this.state.addPost ? 'block' : 'none' }}>
                            <AddPost addPost={this.props.addPostMethod}/>
                        </div>
                            <li id="logout" key="menuElements-04" onClick={this.logOut}> Wyloguj </li>
                    </ul>
                </asside>
            </nav>)
        }
    }
    ReactDOM.render(
    <Navigation />,
                document.getElementById('app')
            );
