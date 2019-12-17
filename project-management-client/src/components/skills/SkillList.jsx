import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddSkill from './AddSkill'; // <== !!!
import SkillCard from './skill-card/SkillCard';
import SkillListTag from './SkillStyles/SkillListStyles';


class SkillList extends Component {
  constructor() {
    super();
    this.state = { listOfSkills: [] };
  }

  getAllSkills = () => {
    axios.get(`http://${process.env.REACT_APP_URL}/skills`, { withCredentials: true })
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
        <ul>
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
        {/* <div style={{width: '40%', float:"right"}}>
            <AddSkill getData={() => this.getAllSkills()}/> 
        </div> */}

      </SkillListTag>

    )
  }
}

export default SkillList;