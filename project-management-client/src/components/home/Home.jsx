import React, { Component } from 'react'
import HomeTag from './HomeStyles'
import CustomMap from '../mapComponent/mapComponent'

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

                    <CustomMap>habilidades cerca de ti</CustomMap>
                </section>
            </HomeTag>
        )
    }
}
