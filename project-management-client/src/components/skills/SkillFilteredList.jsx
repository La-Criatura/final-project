import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddSkill from './AddSkill'; // <== !!!
import SkillCard from './skill-card/SkillCard';
import SkillFilteredListTag from './SkillStyles/SkillListStyles';


class SkillFilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.theUser, listOfSkills: [] };
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
      <SkillFilteredListTag>
        <ul>
          {this.state.listOfSkills.filter(skill =>
            skill.owner._id === this.state._id
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

export default SkillFilteredList;