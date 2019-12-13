import React, { Component } from 'react'
import axios from 'axios';
import AuthService from '../auth-service';

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.service = new AuthService()
        this.state = {
          ...this.props.loggedInUser
        };
    }

    handleFormSubmit = (event) => {
        const {username, picture, email, city} = this.state
        event.preventDefault()
        axios.put(`http://localhost:5000/api/${this.props.loggedInUser._id}`, {username, picture, email, city} , {withCredentials:true})
        .then( ()=> {
            this.setState({username: username, picture: picture, email: email, city: city});
        })
        .then(() => {
            // debugger;
            this.props.history.push('/dashboard')})
        .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleFileUpload = (e) => { 
      const uploadData = new FormData();
    
      uploadData.append('picture', e.target.files[0])
     
      this.service.handleUserPicUpload(uploadData)
      .then(response => {
        this.setState({...this.state, picture: response.secure_url})
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err)
      })
    }

    render() {
        // this.fetchUser()
        return (
            <div>
            <h1>Hola User{this.props.loggedInUser.username}</h1>
                <hr />
                <h3>Edit User</h3>
                <form onSubmit={this.handleFormSubmit} action="/api/skills">
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    <br />
                    <label>City:</label>
                    <input type="text" name="city" value={this.state.city} onChange={e => this.handleChange(e)} />
                    <br />
                    <label>Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                    <br />
                    <label>Picture:</label>
                    <br />
                    <img src={this.state.picture} width="200" alt="" />
                    <br/>
                    <input type="file" onChange={e => this.handleFileUpload(e)} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
