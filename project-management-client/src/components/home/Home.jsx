import React, { Component } from 'react'
import HomeTag from './HomeStyles'
import axios from 'axios';


// import PlacesAutocomplete from 'react-places-autocomplete'

import { Link } from 'react-router-dom';
import RandomSkillsListHome from '../skills/RandomSkillsHome';
import MapContainerHome from '../map-component/mapComponentHome';
import { Jumbotron, Container, Card } from 'react-bootstrap'


export default class Home extends Component {
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
        return (

            < Container className="w-100">

                <Container className="my-3" >
                    <Jumbotron className="d-flex flex-column align-items-center justify-content-center mb-0 rounded-corners has-shadow">
                        <img src="" alt="" />
                        <h1 className="display-4">Claim</h1>
                        <p className="lead">Estamos esperando el copy de Sonia</p>
                    </Jumbotron>
                </Container>
                <div className="text-center my-5">
                    <Card className="d-flex flex-row justify-content-space-around w-100">
                        <section className="d-flex flex-column justify-content-center">
                            <h2>Nuestras Categorías</h2>
                            <section className="card-group">
                                <ul className="category-links d-flex justify-content-space-around">
                                    <div className="card mr-2 px-4 py-3"> <div className="music"><Link to='/skills/category/musica' className='text-body'><img className="card-img-top" src="../../../images/music.png" /><p className="card-text ">Música</p></Link></div></div>
                                    <div className="card mr-2 px-4 py-3"><div className="sports"><Link to='/skills/category/deporte' className='text-body'><img className="card-img-top" src="../../../images/raquet.png" /><p className="card-text">Deporte</p></Link></div></div>
                                    <div className="card mr-2 px-4 py-3"><div className="education"><Link to='/skills/category/educacion' className='text-body'><img className="card-img-top" src="../../../images/open-book.png" /><p className="card-text">Educación</p></Link></div></div>
                                    <div className="card mr-2 px-4 py-3"> <div className="cuisine"><Link to='/skills/category/cocina' className='text-body'><img className="card-img-top" src="../../../images/eat.png" /><p className="card-text">Cocina</p></Link></div></div>
                                    <div className="card mr-2 px-4 py-3"><div className="languages"><Link to='/skills/category/idiomas' className='text-body'><img className="card-img-top" src="../../../images/receptionist.png" /><p className="card-text">Idiomas</p></Link></div></div>
                                    <div className="card mr-2 px-4 py-3"><div className="other"><Link to='/skills/category/otros' className='text-body'><img className="card-img-top" src="../../../images/ball.png" /><p className="card-text">Otros</p></Link></div></div>
                                </ul>
                            </section>
                        </section>
                    </Card>
                </div>



                <Container className="featured-skills d-flex flex-column align-items-center w-100 p-3 mb-4 bg-warning has-shadow rounded-corners">
                    <h2>Destacados</h2>
                    <RandomSkillsListHome/>
                </Container>

                <Container className=" d-flex flex-column align-items-center w-100 p-3 m-0 bg-light has-shadow rounded-corners">
                    <h2>Cerca de ti</h2>
                    <MapContainerHome listOfSkills={this.state.listOfSkills}></MapContainerHome>
                </Container>
                
            </Container >
        )
    }
}
