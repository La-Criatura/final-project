import React, { Component } from 'react'
import HomeTag from './HomeStyles'
import axios from 'axios';

// import PlacesAutocomplete from 'react-places-autocomplete'

import { Link } from 'react-router-dom';
import RandomSkillsListHome from '../skills/RandomSkillsHome';
import MapContainerHome from '../map-component/mapComponentHome';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { listOfSkills: [] };
    }

    getAllSkills = () => {
        axios.get(`http://localhost:5000/api/skills`, { withCredentials: true })
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

            < HomeTag >

                <section>

                    <img src="" alt="" />
                    <h1>Claim</h1>
                </section>
                <section>

                    <h2>Nuestras Categorías</h2>
                    <ul className="category-links">
                        <li className="music"><Link to='/skills/category/music'><img src="../../../images/music.png" /><p>Música</p></Link></li>
                        <li className="sports"><Link to='/skills/category/sports'><img src="../../../images/raquet.png" /><p>Deporte</p></Link></li>
                        <li className="education"><Link to='/skills/category/education'><img src="../../../images/open-book.png" /><p>Educación</p></Link></li>
                        <li className="cuisine"><Link to='/skills/category/cuisine'><img src="../../../images/eat.png" /><p>Cocina</p></Link></li>
                        <li className="languages"><Link to='/skills/category/languages'><img src="../../../images/receptionist.png" /><p>Idiomas</p></Link></li>
                        <li className="other"><Link to='/skills/category/other'><img src="../../../images/ball.png" /><p>Otros</p></Link></li>
                    </ul>
                </section>
                <section className="featured-skills">
                    <h2>Destacados</h2>

                    <RandomSkillsListHome />


                </section>
                <section>
                    <h2>Cerca de ti</h2>
                    <MapContainerHome listOfSkills={this.state.listOfSkills}></MapContainerHome>
                </section>
            </HomeTag >
        )
    }
}
