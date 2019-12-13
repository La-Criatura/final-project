import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom';
import SignupTag from './SignupStyles'



class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  // handleChange() and handleSubmit() will be added here

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: "",

        });
        this.props.getUser(response)
      })
      .catch(error => alert(error.response.data.message))

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // handleUpload = (e) => {
  //   const uploadData = new FormData();
  //   uploadData.append('picture', e.target.files[0])
  //   this.service.upload(uploadData)
  //   .then(
  //     (data) => {
  //       this.setState({...this.state, picture: data.secure_url})
  //     },
  //     (error) => {
  //       console.error(error)
  //     }
  //   )
  // }

  render() {
    return (
      <SignupTag>
        <div className="container">
          <header>
            <Link to={"/"}> Home</Link>
            <div>
              <h1>Regístrate en La Criatura</h1>
              <p>Escribe tus datos</p>
            </div>
            <Link to={"/"}> X</Link>
          </header>
          <section>
            <form onSubmit={this.handleFormSubmit}>
              <label>Username:</label>
              <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
              <label>Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
              <input type="submit" value="Signup" />
            </form>
            <p>Already have account?</p>
          <Link to={"/"}> Login</Link>
          </section>


        </div>
      </SignupTag>

    )
  }
}

export default Signup;