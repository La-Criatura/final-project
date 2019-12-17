import React, { Component } from 'react'
import DashboardTag from './DashboardStyles'
import { Link } from 'react-router-dom';
import SkillFilteredList from '../../skills/SkillFilteredList';
import RandomSkillsList from '../../skills/RandomSkills';

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
                <section className="suggested-skills">
                    <h2>Nuestras Categorías</h2>
                    <p>Aquí va el Carrousel de Categorías</p> 
                    <ul className="category-links">
                        <li><Link to='/skills/category/musica'><img src="../../../images/music.png"/><p>Música</p></Link></li>
                        <li><Link to='/skills/category/deporte'><img src="../../../images/raquet.png"/><p>Deporte</p></Link></li>
                        <li><Link to='/skills/category/educacion'><img src="../../../images/open-book.png"/><p>Educación</p></Link></li>
                        <li><Link to='/skills/category/cocina'><img src="../../../images/eat.png"/><p>Cocina</p></Link></li>
                        <li><Link to='/skills/category/idiomas'><img src="../../../images/receptionist.png"/><p>Idiomas</p></Link></li>
                        <li><Link to='/skills/category/otros'><img src="../../../images/ball.png"/><p>Otros</p></Link></li>
                    </ul>
                    <h2>Destacados</h2>
                    <RandomSkillsList/>
                    <Link className="btn login" to='/skills' style={{ textDecoration: 'none' }}>Ver Más</Link>
                </section>
            </DashboardTag>
        )
    }
}
