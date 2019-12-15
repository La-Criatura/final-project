import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';

import NavBar from './NavbarStyles'
import SearchBox from '../search-box/SearchBox';

import axios from 'axios'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);
      })
  }

  render() {
    this.fetchUser()
    if (this.state.loggedInUser) {
      return (
        <NavBar>
<<<<<<< HEAD
          {/* <nav className="navbar is-danger is-full" role="navigation" aria-label="main navigation"> */}
          <div className="navbar-item">
            <SearchBox />
          </div>

          <div className="navbar-menu">
            <Link className="navbar-item" to='/dashboard'>Panel de Usuario</Link>
            <div className="navbar-item">Welcome, {this.state.loggedInUser.username}</div>
            <Link className="navbar-item" to='/new/skill' style={{ textDecoration: 'none' }}>Añadir Habilidad</Link>
            <Link className="navbar-item" to={`/${this.state.loggedInUser._id}`} style={{ textDecoration: 'none' }}>Editar Usuario</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link to='/'>
                <button className="button is-link" onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </div>
          </div>
          {/* </nav> */}

=======
          <section className="nav-left-side">
            <Link to='/dashboard'>Logo</Link>
            <SearchBox />
            <Link to='/new/skill' className="btn login add" style={{ textDecoration: 'none' }}>Añadir Habilidad</Link>
            <Link to='/'><button className="btn signup" onClick={() => this.logoutUser()}>Logout</button></Link>
            
          </section>
          <section className="nav-right-side">
            <div >Hola {this.state.loggedInUser.username} | Tu crédito actual: {this.state.loggedInUser.credit}</div>
            <Link to={`/${this.state.loggedInUser._id}`} style={{ textDecoration: 'none' }}>Editar Usuario</Link>
          </section>
>>>>>>> b4748181e9afd21c0a325e98505710e60a7995f6
        </NavBar>

      )
    } else {
      return (
        <NavBar>
          <section className="nav-left-side">
            <Link to='/'>Logo</Link>
            <SearchBox />
          </section>
          <section className="nav-right-side">
            <Link className="btn login" to='/login'>Inicia Sesión</Link>
            <Link className="btn signup" to='/signup'>Regístrate</Link>
          </section>
        </NavBar>
      )
    }
  }
}

export default Navbar;