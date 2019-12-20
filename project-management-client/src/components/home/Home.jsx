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

            < Container className=" p-0 m-0 col-12">
                <div className="card bg-dark text-white w-100 border-0" style={{ height: '40rem' }}>
                    <img className="card-img" src="../../../images/people.jpeg" alt="Card image" />
                    <div className="card-img-overlay d-flex flex-column align-items-center">
                        <h5 className="card-title display-4 font-weight-bold mt-3">Intercambia tus <span className="text-warning">Habilidades</span></h5>
                        <p className="card-text font-weight-bold mb-1">¿Te has preguntado qué hacer con todo lo que sabes y lo que puedes ganar compartiéndolo? </p>
                        <p className="card-text font-weight-bold mb-3">¿Quieres aprender nuevas habilidades y conocer gente que pueda ayudarte a hacerlo? </p>
                        <p className="card-text font-size">Bienvenido a <span className="text-dark">Boomerang</span></p>
                    </div>
                </div>
                {/* <Container className="my-3" >

                        <Jumbotron className="d-flex flex-column align-items-center justify-content-center mb-0 mt-5 rounded-corners has-shadow">
                            <img className="home-image" src='../../../images/boomerang-logo.png' alt="boomerang logo" />
                            <h1 className="display-4 font-weight-bold">Intercambia tus <span className="text-info">Habilidades</span></h1>
                            <p className="lead"></p>
                        </Jumbotron>
                    </Container> */}
                <div className="my-10">
                    <div className="text-center my-5">
                        <Card className="d-flex justify-content-center w-100 border-0">
                            <section className="d-flex flex-column justify-content-center w-100">
                                <h2 className="display-4 font-weight-bold mt-5">Nuestras Categorías</h2>
                                <section className="card-group w-100  d-flex justify-content-center">
                                    <ul className="category-links d-flex justify-content-center mt-4 mb-4">
                                        <div className="card p-4 mx-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}> <div className="music"><Link to='/skills/category/musica' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/music.png" /><p className="card-text ">Música</p></Link></div></div>
                                        <div className="card p-4 mx-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}><div className="sports"><Link to='/skills/category/deporte' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/raquet.png" /><p className="card-text">Deporte</p></Link></div></div>
                                        <div className="card p-4 mx-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}><div className="education"><Link to='/skills/category/educacion' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/open-book.png" /><p className="card-text">Educación</p></Link></div></div>
                                        <div className="card p-4 mx-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}> <div className="cuisine"><Link to='/skills/category/cocina' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/eat.png" /><p className="card-text">Cocina</p></Link></div></div>
                                        <div className="card p-4 mx-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}><div className="languages"><Link to='/skills/category/idiomas' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/receptionist.png" /><p className="card-text">Idiomas</p></Link></div></div>
                                        <div className="card p-4 mx-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}><div className="other"><Link to='/skills/category/otros' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/ball.png" /><p className="card-text">Otros</p></Link></div></div>
                                    </ul>
                                </section>
                            </section>
                        </Card>
                    </div>
                </div>




                <Container className="featured-skills d-flex flex-column align-items-center w-100 p-4 my-4 bg-warning has-shadow rounded-corners">
                    <h2 className="display-4 font-weight-bold mb-3 text-dark">Habilidades <span className="text-info">Destacadas</span></h2>
                    <RandomSkillsListHome />
                </Container>

                <div className=" d-flex justify-content-center w-100" style={{'margin-top': '5rem'}}>
                <Container className=" d-flex flex-column align-items-center w-100 p-0 m-0">
                    <h2 className="display-4 font-weight-bold mb-3 text-dark">Cerca de ti</h2>
                    <MapContainerHome listOfSkills={this.state.listOfSkills}></MapContainerHome>
                </Container>
                </div>
                

            </Container >
        )
    }
}
