import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../auth/auth-service'
import PlacesAutocomplete from 'react-places-autocomplete';
import LocationSearchInput from '../map-component/marketMap';


class AddSkill extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", address: "", category: "", skillPicture: "", lat: null, lng: null };
    this.service = new AuthService()
  }

  handleFormSubmit = (event) => {
    console.log(this.state.address, this.state.lat, this.state.lng)
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
    axios.post("http://localhost:5000/api/skills", { title, description, address, category, skillPicture, location }, { withCredentials: true })
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
    let divStyle = { height: "150px" }
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
          <br />
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />
          <br />
          <label>Category:</label>
          <select name="category" value={this.state.category} onChange={e => this.handleChange(e)}>
            <option value="music">Música</option>
            <option value="sports">Deporte</option>
            <option value="education ">Educación</option>
            <option value="cuisine">Cocina</option>
            <option value="languages">Idiomas</option>
            <option value="other">Otros</option>
          </select>
          <br />
          <div style={divStyle}><LocationSearchInput
            onAddressChange={this.handleAddressChange}
          >



          </LocationSearchInput></div>

          {/* <PlacesAutocomplete> */}
          {/* <label>Location:</label>
          <textarea name="location" value={this.state.location} onChange={e => this.handleChange(e)} />
          <br /> */}
          {/* </PlacesAutocomplete> */}

          <label>Picture:</label>
          <input type="file" onChange={e => this.handleFileUpload(e)} />
          <br />
          <input type="submit" value="Añadir Habilidad" />
        </form>
      </div>
    )
  }
}

export default AddSkill;
