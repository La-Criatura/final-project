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
          <section className="nav-left-side">
            <Link to='/dashboard'>Boomerang</Link>
            <SearchBox />
            <Link to='/new/skill' className="btn login add" style={{ textDecoration: 'none' }}>Añadir Habilidad</Link>
            <Link to='/'><button className="btn signup" onClick={() => this.logoutUser()}>Logout</button></Link>
            
          </section>
          <section className="nav-right-side">
            <div >Hola {this.state.loggedInUser.username} | Tu crédito actual: {this.state.loggedInUser.credit}</div>
            <Link to={`/${this.state.loggedInUser._id}`} style={{ textDecoration: 'none' }}>Editar Usuario</Link>
          </section>
        </NavBar>

      )
    } else {
      return (
        <NavBar>
          <section className="nav-left-side">
            <Link to='/'>Boomerang</Link>
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