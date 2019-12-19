import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom';
import SignupTag from './SignupStyles'
import { Button, Form } from 'react-bootstrap'




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

  render() {
    return (
      // <SignupTag>
      //   <div className="container">
      //     <header>
      //       <Link to={"/"}>Boomerang</Link>
      //       <div>
      //         <h1>Regístrate en Boomerang</h1>
      //         <p>Escribe tus datos</p>
      //       </div>
      //       <Link to={"/"}> X</Link>
      //     </header>
      //     <section>
      //       <form onSubmit={this.handleFormSubmit}>
      //         <label>Username:</label>
      //         <input type="text" name="username" autocomplete="off" value={this.state.username} onChange={e => this.handleChange(e)} />
      //         <label>Password:</label>
      //         <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
      //         <input className="btn login" type="submit" value="Signup" />
      //       </form>
      //       <p>Already have account?</p>
      //     <Link to={"/"}> Login</Link>
      //     </section>


      //   </div>
      // </SignupTag>

       <Form>
        
          <header className="d-flex flex-column">
          <div className="d-flex justify-content-between py-3 mb-3">
            <Link to={"/"} className='text-body'>Boomerang</Link>
            <Link to={"/"} className='text-body'> X</Link>
            </div>
         
            <div className="mb-3 text-center">
              <h1>Regístrate en Boomerang</h1>
              <p>Escribe tus datos</p>
            </div>
            </header>
        
        
        
            <form onSubmit={this.handleFormSubmit} className="d-flex flex-column justify-content-center align-items-center">
            <Form.Label>Username</Form.Label>
             <Form.Group controlId="formBasicInput"> </Form.Group>
              <input className="form-control form-control-lg" type="text" name="username" autocomplete="off" value={this.state.username} onChange={e => this.handleChange(e)} />
             


              <Form.Group controlId="formBasicPassword"> </Form.Group>
              <Form.Label>Password</Form.Label>
              <input className="form-control form-control-lg" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
             
              <input className="btn btn-info mt-3" type="submit" value="Signup" />
           
              </form>
              <div className="bottom-section d-flex flex-column justify-content-center align-items-center">
             
             
            <p>Already have account?</p>
          <Link to={"/"}><Button variant="outline-info mb-3">Login</Button></Link>
         

</div>
       
      </Form>


    )
  }
}

export default Signup;