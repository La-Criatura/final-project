import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../auth/auth-service'
import LocationSearchInput from '../map-component/marketMap';
import { Form, Container, Button } from 'react-bootstrap'

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

  deleteSkill = () => {
    const { params } = this.props.match;
    axios
      .delete(`${process.env.REACT_APP_URL}/skills/${params.id}`, {
        withCredentials: true
      })
      .then(() => {
        this.props.history.push("/skills"); // !!!
      })
      .catch(err => {
        console.log(err);
      });
  };

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
      <Container className="bg-light p-3 rounded has-shadow m-2">

        <h2 className="font-weight-bold">Editar Habilidad</h2>

        <Form onSubmit={this.handleFormSubmit}>
          <div className="form-group mb-4">
            <label className="font-weight-bold">Nombre</label>
            <input className="form-control" type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)} />
          </div>

          <div className="form-group mb-4">
            <label className="font-weight-bold">Categoría</label>
            <select className="form-control" name="category" value={this.state.category} onChange={e => this.handleChange(e)}>
              <option value="">Seleccionar:</option>
              <option value="musica">Música</option>
              <option value="deporte">Deporte</option>
              <option value="educacion">Educación</option>
              <option value="cocina">Cocina</option>
              <option value="idiomas">Idiomas</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label className="font-weight-bold">Descripción</label>
            <textarea className="form-control" name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          </div>


          <div className="form-group mb-4">
            <label className="font-weight-bold">Dirección</label>
            <LocationSearchInput className="selection-box" onAddressChange={this.handleAddressChange}></LocationSearchInput>
          </div>

          <div className="form-group mb-4 d-flex flex-column">
            <label className="font-weight-bold">Foto</label>
            <img className="mb-3 scaled-image" src={this.state.skillPicture} alt="" />
            <input className="form-control p-1" type="file" onChange={e => this.handleFileUpload(e)} />
          </div>

          <div className="pt-3">
            <button className="btn btn-outline-danger col-12 mb-2" onClick={(e) => this.deleteSkill(e)}>Eliminar</button>
          </div>

          <input className="btn btn-dark col-12" type="submit" value="Actualizar" />
        </Form>

      </Container>

    )
  }
}

export default EditSkill;