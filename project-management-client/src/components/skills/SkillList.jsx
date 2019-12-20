import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddSkill from './AddSkill'; // <== !!!
import SkillCard from './skill-card/SkillCard';
import SkillListTag from './SkillStyles/SkillListStyles';
import { Container, Card } from "react-bootstrap"


class SkillList extends Component {
  constructor() {
    super();
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
    return (
      <SkillListTag>
        <div style={{'min-height': '40rem'}} className="mb-4">
          <h1 className="display-4 font-weight-bold text-center my-3">Nuestro Catálogo de Habilidades</h1>
          <Container className="bg-light has-shadow py-4">
          <ul className="my-3">
            {this.state.listOfSkills.map(skill => {
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
        </div>


      </SkillListTag>

    )
  }
}

export default SkillList;