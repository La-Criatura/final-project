import React, { Component } from 'react'
import axios from 'axios'
import SkillFilteredListTag from '../skills/SkillStyles/SkillFilteredListStyles'
import SkillCard from '../skills/skill-card/SkillCard';
import { Link } from 'react-router-dom';
import { Container, Card } from "react-bootstrap"

export default class CategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { listOfSkills: [] };
    }

    getAllSkills = () => {
        axios.get(`${process.env.REACT_APP_URL}/skills`, { withCredentials: true })
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
        let category = this.props.match.params.name;
        category = category.charAt(0).toUpperCase() + category.slice(1)
        return (
            <div style={{ 'min-height': '40rem' }} className="mb-4">
                <Container className="mt-5">
                    <h1 className="display-4 font-weight-bold text-center mb-5">Nuestro Catálogo de Habilidades de <spam className="text-info">{category}</spam></h1>
                    <Container className="bg-light has-shadow py-4">
                        <ul className="my-3 d-flex flex-wrap justify-content-center">
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
                    </Container>
                </Container>
            </div>
        )
    }
}
