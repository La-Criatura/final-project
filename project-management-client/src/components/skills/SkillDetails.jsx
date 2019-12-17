import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditSkill from "./EditSkill";
import MapContainer from "../map-component/mapComponent";
import SkillDetailsTag from "./SkillStyles/SkillDetailsStyles";

class SkillDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.loggedInUser };
  }

  getSingleSkill = () => {
    const { params } = this.props.match;
    axios
      .get(`${process.env.REACT_APP_URL}/skills/${params.id}`, {
        withCredentials: true
      })
      .then(responseFromApi => {
        const theSkill = responseFromApi.data;
        this.setState(theSkill);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleSkill();
    } else {
      if (this.state.owner._id === this.props.loggedInUser._id) {
        return (
          <EditSkill
            theSkill={this.state}
            getTheSkill={this.getSingleSkill}
            {...this.props}
          >
            <button onClick={() => this.deleteSkill()}>
              Eliminar Habilidad
          </button>
          </EditSkill>
        );
      } else {
        return <p>No tienes acceso a esta sección</p>;
      }
    }
  };


  updateCredits = () => {
    let credit = this.state.owner.credit
    let counter = this.state.owner.counter
    counter += 1
    if (counter % 5 === 0) {
      credit += 2
    } else {
      credit += 1
    }

    axios.put(`${process.env.REACT_APP_URL}/${this.state.owner._id}`, { credit, counter }, { withCredentials: true })
      .then(() => {
        if (this.state.user.credit <= 0) {
          alert("No tienes suficientes créditos para realizar esta actividad")
          this.props.history.push("/dashboard")
        } else {
          let userCredit = this.state.user.credit
          userCredit -= 1
          axios.put(`${process.env.REACT_APP_URL}/${this.state.user._id}`, { credit: userCredit }, { withCredentials: true })
            .then(() => {
              this.setState({ user: { ...this.state.user, credit: userCredit } })
              this.props.getUser(this.state.user)
              this.props.history.push("/dashboard")
            })
        }
      })
  }

  // DELETE Skill:
  deleteSkill = () => {
    const { params } = this.props.match;
    axios
      .delete(`${process.env.REACT_APP_URL}/skills/${params.id}`, {
        withCredentials: true
      })
      .then(() => {
        this.props.history.push("/skills"); // !!!
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (!this.state.title) {
      this.getSingleSkill();
      return null;
    } else {
      console.log(this.state.location.coordinates[1]);
      return (
        <SkillDetailsTag>
          <div className="top-section">
            <h1>{this.state.title}</h1>

            <div className="fields-container">
              <div className="data-container">
                <label>Descripción:</label><p>{this.state.description}</p>
              </div>
              <div className="data-container">
                <label>Autor:</label><p>{this.state.owner.username}</p>
              </div>
            </div>


            <div className="map-container">
              <MapContainer location={this.state.location}></MapContainer>
            </div>
          </div>
          <div className="bottom-section">
            <div>{this.renderEditForm()}</div>
            <Link to={{ pathname: "/chat", aboutProps: { owner: this.state.owner } }}>Chat</Link>
            <button onClick={() => this.updateCredits()}>Pacto</button>
            <Link to={"/skills"}>Back to skills</Link>
          </div>






        </SkillDetailsTag>
      );
    }
  }
}

export default SkillDetails;
