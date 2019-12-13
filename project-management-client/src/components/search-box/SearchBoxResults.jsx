import React, { Component } from 'react'
import SkillCard from '../skills/skill-card/SkillCard'
import { Link } from 'react-router-dom';

export default class SearchBoxResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrResult: []
        }

    }

    componentDidMount() {
        if (this.props.location.aboutProps) {
            this.setState({ arrResult: [...this.props.location.aboutProps.theFilteredSkills] })
        } return

    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.location.aboutProps ?
                    <div>
                        <h1>Hola estos son tus resultados porque llegan props</h1>
                        {/* {this.props.location.aboutProps.theFilteredSkills.map((initialSkill, idx) => <div key={idx}> {initialSkill.title}</div>)} */}
                        {this.props.location.aboutProps.theFilteredSkills.map((initialSkill, idx) => <li key={idx}><Link to={`/skills/${initialSkill._id}`}><SkillCard theSkill={initialSkill}/></Link></li>)}
                    </div> 
                    :
                    <div>
                        <h1>No tenemos props my friend</h1>
                    </div>
                }
            </div>




        )
    }
}
