import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../auth/auth-service'
import LocationSearchInput from '../map-component/marketMap';

class EditSkill extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService()
    this.state = {
      title: this.props.theSkill.title,
      description: this.props.theSkill.description,
      category: this.props.theSkill.category,
      skillPicture: this.props.theSkill.skillPicture,
      address: this.props.theSkill.address,
      lat: this.props.theSkill.location.coordinates[0],
      lng: this.props.theSkill.location.coordinates[1]
    }
  }

  handleAddressChange = ({ address, lat, lng }) => {
    this.setState({ address })
    if (lat && lng) this.setState({ lat, lng })
  }

  handleFormSubmit = (event) => {

    const title = this.state.title;
    const description = this.state.description;
    const skillPicture = this.state.skillPicture;
    const category = this.state.category;
    const address = this.state.address;
    const latitude = this.state.lat
    const longitude = this.state.lng

    const location = {
      type: "Point",
      coordinates: [latitude, longitude]
    }


    event.preventDefault();

    axios.put(`${process.env.REACT_APP_URL}/skills/${this.props.theSkill._id}`, { title, description, skillPicture, category, address, location }, { withCredentials: true })
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
            <option value="musica">Música</option>
            <option value="deporte">Deporte</option>
            <option value="educacion">Educación</option>
            <option value="cocina">Cocina</option>
            <option value="idiomas">Idiomas</option>
            <option value="otros">Otros</option>
          </select>
          <br />
        
          <div className="dropdown-container">
            <label>Dirección:</label>
            <LocationSearchInput className="selection-box" onAddressChange={this.handleAddressChange}></LocationSearchInput>
          </div>

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