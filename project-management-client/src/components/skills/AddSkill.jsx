import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../auth/auth-service'
import PlacesAutocomplete from 'react-places-autocomplete';
import LocationSearchInput from '../map-component/marketMap';
import AddSkillTag from './SkillStyles/AddSkillStyles';


class AddSkill extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", address: "", category: "", skillPicture: "", lat: null, lng: null };
    this.service = new AuthService()
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const category = this.state.category;
    const skillPicture = this.state.skillPicture
    const address = this.state.address
    const latitude = this.state.lat
    const longitude = this.state.lng

    const location = {
      type: "Point",
      coordinates: [latitude, longitude]
    }

    // const {title, description, category} = this.state
    axios.post(`${process.env.REACT_APP_URL}/skills`, { title, description, address, category, skillPicture, location }, { withCredentials: true })
      .then(() => {
        this.setState({ title: "", description: "", address: "", category: "", skillPicture: "", lat: null, lng: null });
        this.props.history.push('/dashboard');
      })
      .catch(error => console.log(error))
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

  handleAddressChange = ({ address, lat, lng }) => {
    this.setState({ address })
    if (lat && lng) this.setState({ lat, lng })
  }

  render() {
    
    return (
      
      <AddSkillTag>
        <h1>Nueva Habilidad</h1>
        <form onSubmit={this.handleFormSubmit}>
          <section className="top-section">
            <div className="left-section" >
              <div  className="input-container">
                <label>Nombre:</label>
                <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
              </div>
              <div className="input-container textarea-container">
                <label>Descripción:</label>
                <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
              </div>
            </div>
            <div className="right-section">
              <div className="input-container category">
                <label>Categoría:</label>
                <select name="category" value={this.state.category} onChange={e => this.handleChange(e)}>
                  <option value="musica">Música</option>
                  <option value="deporte">Deporte</option>
                  <option value="educacion">Educación</option>
                  <option value="cocina">Cocina</option>
                  <option value="idiomas">Idiomas</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div className="dropdown-container">
              <label>Dirección:</label>
                <LocationSearchInput className="selection-box" onAddressChange={this.handleAddressChange}></LocationSearchInput>
              </div>
            </div>

          </section>
          <section className="bottom-section">
          <div>
            <label>Imagen:</label>
            <div className="image-container">
            <img src={this.state.skillPicture} alt="" />
            </div>
            
            <input type="file" onChange={e => this.handleFileUpload(e)} />
          </div>
          <input className="btn login" type="submit" value="Añadir Habilidad" />
          </section>
        </form>
      </AddSkillTag>



    )
  }
}

export default AddSkill;
