import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditSkill from './EditSkill';

class SkillDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleSkill();
  }

  getSingleSkill = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/skills/${params.id}`, {withCredentials:true})
    .then( responseFromApi =>{
      const theSkill = responseFromApi.data;
      this.setState(theSkill);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleSkill();
    } else {
      if (this.state.owner._id === this.props.loggedInUser._id) {
        return <EditSkill theSkill={this.state} getTheSkill={this.getSingleSkill} {...this.props} />
    } else {
      return <p>No tienes acceso a esta sección</p>
    }
  }
  }

// DELETE Skill:
  deleteSkill = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/skills/${params.id}`, {withCredentials:true})
    .then( () =>{
        this.props.history.push('/skills'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div>{this.renderEditForm()} </div>
        <button onClick={() => this.deleteSkill()}>Eliminar Habilidad</button> {/* <== !!! */}
        <br/>
        <Link to={'/skills'}>Back to skills</Link>
      </div>
    )
  }
}

export default SkillDetails;