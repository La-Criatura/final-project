import React, { Component } from 'react'
import DashboardTag from './DashboardStyles'
import { Link } from 'react-router-dom';
import SkillFilteredList from '../../skills/SkillFilteredList';
import RandomSkillsList from '../../skills/RandomSkills';
import {Container, Card} from "react-bootstrap"
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.loggedInUser
        }
    }

    render() {
        return (
            <DashboardTag>
                <section className="my-skills">
                    <h2>Mis habilidades</h2>
                    <SkillFilteredList theUser={this.state}/>
                    <Link className="btn login" to='/new/skill' style={{ textDecoration: 'none' }}>Añadir Habilidad</Link>
                    
                </section>

                <div className="text-center my-5">
                <Card className="d-flex flex-row justify-content-space-around w-100">
                <section className="d-flex flex-column justify-content-center">
                    <h2>Nuestras Categorías</h2>
                    <p>Aquí va el Carrousel de Categorías</p> 
                    <section className="card-group">
                    <ul className="category-links d-flex justify-content-space-around">
                    <div className="card mr-2 px-4 py-3"> <Link to='/skills/category/musica' className='text-body'><img className="card-img-top"src="../../../images/music.png"/><p className="card-text ">Música</p></Link></div>
                    <div className="card mr-2 px-4 py-3"> <Link to='/skills/category/deporte' className='text-body'><img className="card-img-top" src="../../../images/raquet.png"/><p className="card-text ">Deporte</p></Link></div>
                    <div className="card mr-2 px-4 py-3"> <Link to='/skills/category/educacion' className='text-body'><img className="card-img-top" src="../../../images/open-book.png"/><p className="card-text ">Educación</p></Link></div>
                    <div className="card mr-2 px-4 py-3"> <Link to='/skills/category/cocina' className='text-body'><img className="card-img-top" src="../../../images/eat.png"/><p className="card-text ">Cocina</p></Link></div>
                    <div className="card mr-2 px-4 py-3"> <Link to='/skills/category/idiomas' className='text-body'><img className="card-img-top" src="../../../images/receptionist.png"/><p className="card-text">Idiomas</p></Link></div>
                    <div className="card mr-2 px-4 py-3"> <Link to='/skills/category/otros' className='text-body'><img className="card-img-top" src="../../../images/ball.png"/><p className="card-text">Otros</p></Link></div>
                    </ul>
                    </section>
                    </section>
                    </Card>
                    </div>


                    <h2>Destacados</h2>
                    <RandomSkillsList/>
                    <Link className="btn login" to='/skills' style={{ textDecoration: 'none' }}>Ver Más</Link>
                

               
            </DashboardTag>
        )
    }
}
