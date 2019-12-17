import React, { Component } from 'react'
import axios from 'axios';
import AuthService from '../auth-service';
import EditUserTag from './EditUserStyles';

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.service = new AuthService()
        this.state = {
            ...this.props.loggedInUser
        };
    }

    // componentDidMount() {
    //     this.props.getTheUser()
    //   }
    
      getTheUser = () => {
        const params = this.state
       
        axios.get(`http://${process.env.REACT_APP_URL}/${params._id}`, {withCredentials: true})
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
        axios.put(`http://${process.env.REACT_APP_URL}/${this.props.loggedInUser._id}`, { username, picture, email, city, counter }, { withCredentials: true })
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
        // this.fetchUser()
        return (
            <EditUserTag>
                <div className="main-container">
                    <h1>Perfil de Usuario</h1>
                    <form onSubmit={this.handleFormSubmit} action="/api/skills">
                        <section className="top-section">
                            <div>
                                <div className="input-container">
                                    <label>Nombre:</label>
                                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                                </div>
                                <div className="input-container blue">
                                    <label>Ciudad:</label>
                                    <select name="city" value={this.state.city} onChange={e => this.handleChange(e)}>
                                        <option value="Barcelona">Barcelona</option>
                                        <option value="Madrid">Madrid</option>
                                        <option value="Sevilla">Sevilla</option>
                                        <option value="Bilbao">Bilbao</option>
                                        <option value="Valencia">Valencia</option>
                                        <option value="Zaragoza">Zaragoza</option>
                                    </select>
                                </div>
                               
                            </div>
                            <div>
                                <div className="input-container">
                                    <label>Correo electrónico:</label>
                                    <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                                </div>
                                <div className="input-container blue">
                                    <label>Créditos La Criatura:</label>
                                    <input type="text" name="email" value={this.state.credit} />
                                </div>
                            </div>
                        </section>
                        <section className="bottom-section">
                            <img src={this.state.picture} width="200" alt="" />
                            <input className="choose-file" type="file" onChange={e => this.handleFileUpload(e)} />
                        
                        </section>
                        <input className="btn dark-blue" type="submit" value="Actualizar Perfil" />
                    </form>
                </div>
            </EditUserTag>
        )
    }
}
