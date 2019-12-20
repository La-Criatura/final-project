import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



import SkillFilteredListTag from './SkillStyles/SkillListStyles';

import SkillInfo from './skill-info/SkillInfo';
import SkillCard from './skill-card/SkillCard';


class RandomSkillsList extends Component {
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

  randomPositions(skillList) {
    for (var a=[], i=0; i<skillList;++i) a[i]=i;

    function shuffle(array) {
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }
    
    return shuffle(a).splice(0,4);
  }

  render() {
    let randomArray = this.randomPositions(this.state.listOfSkills.length)
    return (
      <div>
        <ul className="d-flex my-3">
          {this.state.listOfSkills.filter((elm,idx) => randomArray.includes(idx)).map(skill => {
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
      </div>
    

    )
  }
}

export default RandomSkillsList;