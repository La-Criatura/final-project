import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../auth/auth-service'
import PlacesAutocomplete from 'react-places-autocomplete';
import LocationSearchInput from '../map-component/marketMap';
import AddSkillTag from './SkillStyles/AddSkillStyles';
import { Button, Form, Container } from 'react-bootstrap'


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

      <Form className="d-flex flex-column align-items-center col-6 mt-4 bg-light has-shadow m-5 p-5 rounded" >
        <h1 className="mb-4">Nueva Habilidad</h1>
        <form onSubmit={this.handleFormSubmit} className="d-flex flex-column align-items-center col-12">
          <Container className="d-flex col-12">

            <div className="d-flex flex-column col-6" >

              <div className="form-group">
                <label>Nombre:</label>
                <input type="text" className="form-control" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
              </div>

              <div className="form-group">
                <label>Descripción:</label>
                <textarea name="description" className="form-control" value={this.state.description} onChange={e => this.handleChange(e)} />
              </div>

            </div>

            <div className="right-section d-flex flex-column col-6">
              <div className="form-group d-flex flex-column">
                <label>Categoría:</label>
                <select name="category" className="form-control" value={this.state.category} onChange={e => this.handleChange(e)}>
                  <option value="musica">Música</option>
                  <option value="deporte">Deporte</option>
                  <option value="educacion">Educación</option>
                  <option value="cocina">Cocina</option>
                  <option value="idiomas">Idiomas</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div className="dropdown-container form-group">
                <label>Dirección:</label>
                <LocationSearchInput onAddressChange={this.handleAddressChange}></LocationSearchInput>
              </div>
            </div>

          </Container>
          <div className="hr col-10"></div>
          <Container className="col-12 d-flex flex-column align-items-center">
            <div className="d-flex flex-column col-12 mb-4">
              <label>Imagen:</label>
              <Container className="col-12 p-0 rounded mb-2 form-control">
              <img className="col-12 p-0 rounded" src={this.state.skillPicture} alt=""/>
              </Container>
                
              
              <input className="form-control p-1" type="file" onChange={e => this.handleFileUpload(e)} />
            </div>
            <input className="btn btn-info" type="submit" value="Añadir Habilidad" />
          </Container>
        </form>
      </Form>



    )
  }
}

export default AddSkill;
