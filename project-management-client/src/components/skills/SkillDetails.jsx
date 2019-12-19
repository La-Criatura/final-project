import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditSkill from "./EditSkill";
import MapContainer from "../map-component/mapComponent";
import SkillDetailsTag from "./SkillStyles/SkillDetailsStyles";
import { Container } from 'react-bootstrap'

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
        return ;
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

  addToFavourites = (e) => {
    e.preventDefault()
    const favouriteSkill = this.state._id
    let favouritesArray = this.state.user.favourites
    favouritesArray = favouritesArray.push(favouriteSkill)
    const favourites = favouritesArray

    axios.put(`${process.env.REACT_APP_URL}/${this.state.user._id}`, { $push: { favourites: favouriteSkill } }, { withCredentials: true })
      .then(() => {
        this.setState({ user: { favourites: favouritesArray } });
      })
      .then(() => {

        this.props.history.push('/dashboard')
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
        <Container className="d-flex flex-column align-items-center col-12 mt-3">
          <Container className="d-flex justify-content-center col-12 mt-3 mb-5">
            <Container className="col-6 p-3 m-2 rounded has-shadow">
              <div className="h-100 d-flex flex-column justify-content-between">
                <div className="mb-15">
                  <h2 className="font-weight-bold">{this.state.title}</h2>
                  <div className="form-group mb-4">
                    <label className="font-weight-bold">Autor</label><p className="form-control bg-light">{this.state.owner.username}</p>
                  </div>
                  <div className="form-group mb-4">
                    <label className="font-weight-bold">Dirección</label><p className="form-control bg-light" >{this.state.address}</p>
                  </div>

                  <div className="form-group mb-4">
                    <label className="font-weight-bold">Descripción</label><textarea className="form-control bg-light has-scroll-overflow" >{this.state.description}</textarea>
                  </div>

                  <div >
                    <label className="font-weight-bold">¿Dónde?</label>
                    <MapContainer className="form-control" location={this.state.location}></MapContainer>
                  </div>
                </div>
                <div className="pt-3">
                <button className="btn btn-dark col-12" onClick={(e) => this.addToFavourites(e)}>Añadir a Favoritos</button>
                </div>
                
              </div>
              
          </Container>
          <React.Fragment>
              {this.renderEditForm()}
          </React.Fragment>
          </Container>

            
            
           

          <Container className="col-12 d-flex justify-content-center">
            <Link className="btn btn-dark mx-2 col-2" to={{ pathname: "/chat", aboutProps: { owner: this.state.owner } }}>Chat</Link>
            <button className="btn btn-success mx-2 col-2" onClick={() => this.updateCredits()}>Boomerang</button>
            <Link className="btn btn-dark mx-2 col-2" to={"/skills"}>Back to skills</Link>

          </Container>

        </Container>

      );
    }
  }
}

export default SkillDetails;
