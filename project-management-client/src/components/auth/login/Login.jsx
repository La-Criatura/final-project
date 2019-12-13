import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom';
import LoginTag from './LoginStyles';

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
      <LoginTag>
        <div className="container">
          <header>
            <Link to={"/"}> Home</Link>
            <div>
              <h1>Bienvenido de nuevo</h1>
              <p>Escribe tus datos de inicio de sesión</p>
            </div>
            <Link to={"/"}> X</Link>
          </header>
          <section>
            <form onSubmit={this.handleFormSubmit}>
              <label>Username:</label>
              <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
              <label>Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
              <input type="submit" value="Inicia Sesión" />
            </form>
            <p>¿No tienes cuenta?</p>
            <Link to={"/signup"}>Regístrate</Link>
          </section>
        </div>

      </LoginTag>
    )
  }
}

export default Login;