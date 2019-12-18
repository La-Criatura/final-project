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
        <NavBar bg="warning"  className="w-100 d-flex justify-content-around align-items-center py-3" > 

        
            {/* <section className="nav-left-side"> */}
            <Col md="2" className="d-flex justify-content-center"><Link to='/'>Boomerang</Link></Col>
            <Col md="6"><SearchBox /></Col>

            {/* </section> */}
            {/* <section className="nav-right-side"> */}
           
            <Col md="4" className="d-flex justify-content-end">
              <Link className="mr-3" to='/login'><Button variant="info">Inicia Sesión</Button></Link>
              <Link className="" to='/signup'><Button variant="info">Regístrate</Button></Link>
            </Col>


            {/* </section> */}



        </NavBar>
      )
    }
  }
}

export default Navbar;