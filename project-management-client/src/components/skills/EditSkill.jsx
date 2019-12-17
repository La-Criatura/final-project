import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../auth/auth-service'

class EditSkill extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService()
    this.state = {
      title: this.props.theSkill.title,
      description: this.props.theSkill.description,
      category: this.props.theSkill.category,
      skillPicture: this.props.theSkill.skillPicture,
      //location: this.props.theSkill.location
    }
  }

  handleFormSubmit = (event) => {

    const title = this.state.title;
    const description = this.state.description;
    const skillPicture = this.state.skillPicture;
    const category = this.state.category;


    event.preventDefault();

    axios.put(`http://${process.env.REACT_APP_URL}/skills/${this.props.theSkill._id}`, { title, description, skillPicture, category }, { withCredentials: true })
      .then(() => {
        this.props.getTheSkill();
        // after submitting the form, redirect to '/Skills'
        this.props.history.push('/dashboard');
      })
      .catch(error => console.log(error))
  }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleChangeDesc = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append('skillPicture', e.target.files[0])

    this.service.handleUpload(uploadData)
      .then(response => {
        this.setState({ ...this.state, skillPicture: response.secure_url })
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err)
      })
  }

  render() {
    return (
      <div>
        <hr />
        <h3>Editar Habilidad</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Nombre:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)} />
          <br />
          <label>Descripción:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          <br />
          <label>Categoría:</label>
          <select name="category" value={this.state.category} onChange={e => this.handleChange(e)}>
            <option value="Música">Música</option>
            <option value="Deporte">Deporte</option>
            <option value="Educación">Educación</option>
            <option value="Cocina">Cocina</option>
            <option value="Idiomas">Idiomas</option>
            <option value="Otros">Otros</option>
          </select>
          <br />
          {/* <label>Location:</label>
          <textarea name="location" value={this.state.location} onChange={e => this.handleChange(e)} />
          <br /> */}
          <label>Foto:</label>
          <br />
          <img src={this.state.skillPicture} alt="" />
          <input type="file" onChange={e => this.handleFileUpload(e)} />
          <br />
          <input type="submit" value="Actualizar" />
        </form>
      </div>
    )
  }
}

export default EditSkill;