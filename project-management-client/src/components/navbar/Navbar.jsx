import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';

// import NavBar from './NavbarStyles'
import SearchBox from '../search-box/SearchBox';
import Button from 'react-bootstrap/Button';
import { Navbar as NavBar } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

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
        <NavBar bg="warning" className="w-100 d-flex justify-content-between align-items-center py-3 fixed-top">
          {/* <section className="nav-left-side"> */}
          <Col md="1" className="d-flex justify-content-center"><Link to='/dashboard'><img style={{width: '10rem', padding: '0 1rem'}} src='../../../images/boomerang-logo-black.png' alt=""/></Link></Col>
          <Col md="5"><SearchBox /></Col>


          {/* </section> */}
          {/* <section className="nav-right-side"> */}

          <Col md="6" className="d-flex justify-content-end">
            <div className="mr-3 pt-1">Hola {this.state.loggedInUser.username} | Crédito actual: {this.state.loggedInUser.credit}</div>
            <Link to='/new/skill' ><Button variant="dark">Añadir Habilidad</Button></Link>
            <Link to={`/${this.state.loggedInUser._id}`}><Button variant="dark ml-1">Editar Usuario</Button></Link>
            <Link to='/'><Button variant="outline-danger ml-1" onClick={() => this.logoutUser()}>Logout</Button></Link>

          </Col>
          {/* </section> */}
        </NavBar>

      )
    } else {
      return (
        <NavBar bg="warning" className="w-100 d-flex justify-content-around align-items-center py-3 fixed-top" >
          {/* <section className="nav-left-side"> */}
          <Col md="2" className="d-flex justify-content-center"><Link to='/'><img style={{width: '10rem'}} src='../../../images/boomerang-logo-black.png' alt=""/></Link></Col>
          <Col md="6"><SearchBox /></Col>
          {/* </section> */}
          {/* <section className="nav-right-side"> */}
          <Col md="4" className="d-flex justify-content-end">
            <Link className="mr-3 has-shadow" to='/login'><Button variant="dark">Inicia Sesión</Button></Link>
            <Link className="has-shadow" to='/signup'><Button variant="dark">Regístrate</Button></Link>
          </Col>


          {/* </section> */}



        </NavBar>
      )
    }
  }
}

export default Navbar;