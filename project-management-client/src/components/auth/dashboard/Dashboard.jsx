import React, { Component } from 'react'
import DashboardTag from './DashboardStyles'
import { Link } from 'react-router-dom';
import SkillFilteredList from '../../skills/SkillFilteredList';
import RandomSkillsList from '../../skills/RandomSkills';
import { Container, Card } from "react-bootstrap"
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.loggedInUser
        }
    }

    render() {
        return (
            <div className="px-0 mx-0">
                <Container>
                    <section className="d-flex flex-column align-items-center has-shadow my-5 p-5 rounded has-parallax text-white">
                        <h2 className="display-4 font-weight-bold text-white">Mis <span className="text-warning">Habilidades</span></h2>
                        <SkillFilteredList theUser={this.state} />
                        <Link className="btn btn-outline-warning" to='/new/skill' style={{ textDecoration: 'none' }}>Añadir Habilidad</Link>
                    </section>

                    <div className="my-3">
                        <div className="text-center my-5">
                            <Card className="d-flex justify-content-center w-100 border-0">
                                <section className="d-flex flex-column justify-content-center w-100">
                                    <h2 className="display-4 font-weight-bold mt-5">Nuestras Categorías</h2>
                                    <section className="card-group w-100  d-flex justify-content-center">
                                        <ul className="category-links d-flex justify-content-center mt-4 mb-4">
                                            <div className="card p-4 mx-3 mb-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}> <div className="music"><Link to='/skills/category/musica' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/music.png" /><p className="card-text ">Música</p></Link></div></div>
                                            <div className="card p-4 mx-3 mb-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}><div className="sports"><Link to='/skills/category/deporte' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/raquet.png" /><p className="card-text">Deporte</p></Link></div></div>
                                            <div className="card p-4 mx-3 mb-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}><div className="education"><Link to='/skills/category/educacion' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/open-book.png" /><p className="card-text">Educación</p></Link></div></div>
                                            <div className="card p-4 mx-3 mb-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}> <div className="cuisine"><Link to='/skills/category/cocina' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/eat.png" /><p className="card-text">Cocina</p></Link></div></div>
                                            <div className="card p-4 mx-3 mb-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}><div className="languages"><Link to='/skills/category/idiomas' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/receptionist.png" /><p className="card-text">Idiomas</p></Link></div></div>
                                            <div className="card p-4 mx-3 mb-3 rounded-circle bg-light has-shadow" style={{ width: '10rem', height: '10rem' }}><div className="other"><Link to='/skills/category/otros' className='text-body'><img className="card-img-top" style={{ width: '5rem' }} src="../../../images/ball.png" /><p className="card-text">Otros</p></Link></div></div>
                                        </ul>
                                    </section>
                                </section>
                            </Card>
                        </div>
                    </div>
                </Container>



                {/* <div className="col-12 m-0 p-0" >
                    <div className="card bg-dark text-white border-0">
                        <img className="card-img background-image scaled-image has-parallax"  src="" alt="Card image" />
                        <div className="card-img-overlay d-flex flex-column align-items-center">
                            <h5 className="card-title display-4 font-weight-bold mt-3">Habilidades <span className="text-warning">Destacadas</span></h5>
                            <RandomSkillsList />
                            <Link className="btn btn-outline-warning" to='/skills' style={{ textDecoration: 'none' }}>Ver Más</Link>

                        </div>
                    </div>
                </div> */}

                <div className="col-12 m-0  p-0">
                    <div className="w-100 m-0 py-5 has-parallax d-flex flex-column align-items-center" >
                        <h5 className="card-title display-4 font-weight-bold ">Habilidades <span className="text-warning">Destacadas</span></h5>
                        <div className="w-100 px-5">
                            <RandomSkillsList />
                        </div>

                        <Link className="btn btn-outline-warning" to='/skills' style={{ textDecoration: 'none' }}>Ver Más</Link>
                    </div>
                </div>




            </div>
        )
    }
}
