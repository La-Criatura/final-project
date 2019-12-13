import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../auth/auth-service'


class AddSkill extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "", category: "", skillPicture:""};
      this.service = new AuthService()
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const category = this.state.category;
    const skillPicture = this.state.skillPicture
    // const {title, description, category} = this.state
    axios.post("http://localhost:5000/api/skills", { title, description, category, skillPicture}, {withCredentials:true})
    .then( () => {
        this.setState({title: "", description: "", category: "" , skillPicture:""});
        this.props.history.push('/dashboard'); 
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  handleFileUpload = (e) => { 
    const uploadData = new FormData();
  
    uploadData.append('skillPicture', e.target.files[0])
    
    this.service.handleUpload(uploadData)
    .then(response => {
      this.setState({...this.state, skillPicture: response.secure_url})
    })
    .catch(err => {
      console.log("Error while uploading the file: ", err)
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <br/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          <br/>
          <label>Category:</label>
          <select name="category" value={this.state.category} onChange={ e => this.handleChange(e)}>
            <option value="music">Música</option>
            <option value="sports">Deporte</option>
            <option value="education ">Educación</option>
            <option value="cuisine">Cocina</option>
            <option value="languages">Idiomas</option>
            <option value="other">Otros</option>
          </select>
          <br/>
          <label>Picture:</label>
          <input type="file" onChange={ e => this.handleFileUpload(e)}/>
          <br/>
          <input type="submit" value="Añadir Habilidad" />
        </form>
      </div>
    )
  }
}

export default AddSkill;
