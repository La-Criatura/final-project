import React, { Component } from 'react'
import axios from 'axios';
import AuthService from '../auth-service';
import EditUserTag from './EditUserStyles';
import FavoriteSkills from '../../skills/favorite-skills/FavoriteSkills';
import { Button, Form } from 'react-bootstrap'

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.service = new AuthService()
        this.state = {
            ...this.props.loggedInUser
        };
    }

    getTheUser = () => {
        const params = this.state

        axios.get(`${process.env.REACT_APP_URL}/${params._id}`, { withCredentials: true })
            .then(responseFromApi => {
                const theUser = responseFromApi.data
                this.setState(theUser)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleFormSubmit = (event) => {
        const { username, picture, email, city, counter } = this.state
        event.preventDefault()
        axios.put(`${process.env.REACT_APP_URL}/${this.props.loggedInUser._id}`, { username, picture, email, city, counter }, { withCredentials: true })
            .then(() => {
                this.setState({ username: username, picture: picture, email: email, city: city, counter: counter });
            })
            .then(() => {
                this.props.getUser(this.state)
                this.props.history.push('/dashboard')
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFileUpload = (e) => {
        const uploadData = new FormData();

        uploadData.append('picture', e.target.files[0])

        this.service.handleUserPicUpload(uploadData)
            .then(response => {
                this.setState({ ...this.state, picture: response.secure_url })
            })
            .catch(err => {
                console.log("Error while uploading the file: ", err)
            })
    }

    render() {

        return (
            <Form>

                <div className="d-flex">
                    <div className="d-flex flex-column text-center align-items-center rounded mx-3 my-3 px-3 has-shadow">
                        <h1 className="mt-4">Perfil de Usuario</h1>
                        <form onSubmit={this.handleFormSubmit} className="d-flex" action="/api/skills">

                            <div>
                                <div>
                                    
                                    <Form.Group controlId="formBasicInput"></Form.Group>
                                    <Form.Label className="m-0 p-0">Nombre</Form.Label>
                                    <input className="form-control form-control-large" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                                </div>

                                <div>
                                    
                                    <Form.Group controlId="formBasicInput"></Form.Group>
                                    <Form.Label>Ciudad</Form.Label>
                                    <select className="form-control " name="city" value={this.state.city} onChange={e => this.handleChange(e)}>
                                        <option value="">Seleccionar:</option>
                                        <option value="Barcelona">Barcelona</option>
                                        <option value="Madrid">Madrid</option>
                                        <option value="Sevilla">Sevilla</option>
                                        <option value="Bilbao">Bilbao</option>
                                        <option value="Valencia">Valencia</option>
                                        <option value="Zaragoza">Zaragoza</option>
                                    </select>
                                </div>




                                <div>
                                    
                                    <Form.Group controlId="formBasicInput"></Form.Group>
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <input className="form-control" type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                                </div>


                                <div className="mb-3 d-flex flex-column align-items-center">
                                    <Form.Group controlId="formBasicInput"></Form.Group>
                                    <Form.Label>Foto de Perfil</Form.Label>
                                    <img src={this.state.picture} className="rounded-circle mb-3 border-bottom-0" width="200" alt="" />
                                    <input className="form-control-file text-center pt-2" type="file" onChange={e => this.handleFileUpload(e)} />
                                </div>

                                <input className="btn btn-info mb-3" type="submit" value="Actualizar Perfil" />
                            </div>
                        </form>

                    </div>
                    <div className="d-flex flex-column justify-content-flex-end text-center align-items-center mt-3">
                        <FavoriteSkills theUser={this.state}></FavoriteSkills>
                    </div>
                </div>

            </Form>
        )
    }
}
