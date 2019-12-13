import React, { Component } from 'react'
import axios from 'axios'
import SkillFilteredListTag from '../skills/SkillStyles/SkillFilteredListStyles'
import SkillCard from '../skills/skill-card/SkillCard';
import { Link } from 'react-router-dom';

export default class CategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { listOfSkills: [] };
    }

    getAllSkills = () => {
        axios.get(`http://localhost:5000/api/skills`, { withCredentials: true })
            .then(responseFromApi => {
                this.setState({
                    listOfSkills: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getAllSkills();
    }


    render() {
        
        return (
            <SkillFilteredListTag>
                <ul>
                    {this.state.listOfSkills.filter(skill =>
                        skill.category === this.props.match.params.name
                    ).map(skill => {
                        return (
                            <li key={skill._id}>
                                <Link to={`/skills/${skill._id}`}>
                                    <SkillCard theSkill={skill} />
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </SkillFilteredListTag>
        )
    }
}
