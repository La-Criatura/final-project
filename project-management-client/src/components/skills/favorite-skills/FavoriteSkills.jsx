import React, { Component } from 'react'
// import AuthService from '../../auth/auth-service';
import axios from 'axios'



export default class FavoriteSkills extends Component {
    constructor(props){
        super(props)
        this.user = JSON.parse(JSON.stringify(this.props.theUser))
        this.state = { user: this.user }           
    
    }
    
    // fetchUser() {
    //     if (this.state.loggedInUser === null) {
    //       this.service.loggedin()
    //         .then(response => {
    //           this.setState({
    //             loggedInUser: response
    //           })
    //         })
    //         .catch(err => {
    //           this.setState({
    //             loggedInUser: false
    //           })
    //         })
    //     }
    // }
    
    // componentDidMount() {
    //     this.getTheUser()
    // }

    getTheUser = () => {
       
        axios.get(`${process.env.REACT_APP_URL}/${this.props.theUser._id}`, {withCredentials: true})
        .then(responseFromApi => {
            const theUser = responseFromApi.data
            debugger;
            this.setState(theUser)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
       
        return (
            <div>
                <h1>Aquí van los favoritos {this.state.user.username}</h1>
                <ul>
                    {this.state.user.favourites.map((skill, idx) => <li key={idx}>Hola -> {skill.title}</li>)}
                </ul>
            </div>
        )
    }
}
