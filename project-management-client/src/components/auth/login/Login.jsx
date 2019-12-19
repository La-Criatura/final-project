import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom';
import LoginTag from './LoginStyles';
//import Button from 'react-bootstrap/Button';
import { Button, Form } from 'react-bootstrap'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'Sonia', password: '12345678' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response)
      })
      .catch(error => alert(error.response.data.message))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Form>
        <header className="d-flex flex-column">
          <div className="d-flex justify-content-between py-3 mb-3">
            <Link to={"/"} className='text-body'>Boomerang</Link>
            <Link to={"/"} className='text-body'> X</Link>
          </div>

          <div className="mb-3 text-center">
            <h1>Bienvenido de nuevo</h1>
            <p>Escribe tus datos de inicio de sesión</p>
          </div>
        </header>

        <form onSubmit={this.handleFormSubmit} className="d-flex flex-column justify-content-center align-items-center">
          <Form.Label>Nombre de Usuario </Form.Label>
          <Form.Group controlId="formBasicInput"></Form.Group>
            <input className="form-control form-control-lg" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          

          <Form.Group controlId="formBasicPassword"></Form.Group>
          <Form.Label>Contraseña </Form.Label>
          <input className="form-control form-control-lg" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
         <input className="btn btn-info mt-3 mb-3" type="submit" value="Inicia Sesión" />

        </form>
    
        <section className="bottom-section d-flex flex-column justify-content-center align-items-center">
          <p>¿No tienes cuenta?</p>
          <Link to={"/signup"}><Button variant="outline-info mb-3">Regístrate</Button></Link>
         
        </section>
      
      </Form>
    )
  }
}

export default Login;