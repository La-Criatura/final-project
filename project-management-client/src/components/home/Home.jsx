import React, { Component } from 'react'
import HomeTag from './HomeStyles'
import CustomMap from '../map-component/mapComponent'

export default class Home extends Component {
    render() {
        return (
            <HomeTag>
                <section>
                    <img src="" alt="" />
                    <h1>Claim 2</h1>
                </section>
                <section>
                    <h2>Nuestras Categorías</h2>
                    <p>Aquí va el Carrousel de Categorías</p>
                </section>
                <section>
                    <h2>Destacados</h2>
                    <p>Random de seis habilidades</p>
                </section>
                <section>
                    <h2>Cerca de ti</h2>
                    <p><CustomMap>Habilidades cerca de ti</CustomMap></p>
                </section>
            </HomeTag>
        )
    }
}
