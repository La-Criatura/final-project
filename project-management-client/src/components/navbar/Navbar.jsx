import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';

import NavBar from './NavbarStyles'
import SearchBox from '../search-box/SearchBox';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
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
    if (this.state.loggedInUser) {
      return (
        <NavBar>
        {/* <nav className="navbar is-danger is-full" role="navigation" aria-label="main navigation"> */}
          <div className="navbar-item">
            <SearchBox/>
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

        </NavBar>

      )
    } else {
      return (
        <NavBar>
          <SearchBox />
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>
        </NavBar>
      )
    }
  }
}

export default Navbar;