import React, { Component } from 'react'
// import AuthService from '../../auth/auth-service';
import axios from 'axios'
import SkillCardB from '../skill-card/SkillCardB'
import { Link } from 'react-router-dom';



export default class FavoriteSkills extends Component {
    constructor(props) {
        super(props)
        // this.user = JSON.parse(JSON.stringify(this.props.theUser))
        this.user = {...this.props.theUser}
        this.state = { user: this.user }

    }

    getTheUser = () => {

        axios.get(`${process.env.REACT_APP_URL}/${this.props.theUser._id}`, { withCredentials: true })
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
            <div className="bg-info text-white pt-2 px-2 rounded has-shadow" style={{height: '44rem'}}>
                <h1 className="mt-3">Favoritos</h1>
                <ul className="has-scroll-overflow">
                    {this.state.user.favourites.map((skill, idx) => <li key={idx} className="mb-3"><Link to={`/skills/${skill}`}><SkillCardB theSkill={skill}></SkillCardB></Link></li>)}
                </ul>
            </div>

        )
    }
}
