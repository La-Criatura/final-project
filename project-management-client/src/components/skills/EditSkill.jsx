import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../auth/auth-service'

class EditSkill extends Component {
  constructor(props){
    super(props);
    this.service = new AuthService()
    this.state = {
        title: this.props.theSkill.title, 
        description: this.props.theSkill.description,
        skillPicture: this.props.theSkill.skillPicture
    }
  }

    
  handleFormSubmit = (event) => {
    
    const title = this.state.title;
    const description = this.state.description;
    const skillPicture = this.state.skillPicture;


    event.preventDefault();

    axios.put(`http://localhost:5000/api/skills/${this.props.theSkill._id}`, { title, description, skillPicture }, {withCredentials:true})
    .then( () => {
        this.props.getTheSkill();
        // after submitting the form, redirect to '/Skills'
        this.props.history.push('/dashboard');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeTitle = (event) => {  
    this.setState({
      title:event.target.value
    })
  }

  handleChangeDesc = (event) => {  
    this.setState({
      description:event.target.value
    })
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
    return (
      <div>
        <hr />
        <h3>Edit Skill</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
          <br/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          <br/>
          <label>Picture:</label>
          <br/>
          <img src={this.state.skillPicture} alt=""/>
          <input type="file" onChange={ e => this.handleFileUpload(e)}/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditSkill;