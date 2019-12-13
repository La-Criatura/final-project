import React, { Component } from 'react'
import FooterTag from './FooterStyles'

export default class Footer extends Component {
    render() {
        return (
            <FooterTag>
                <div>
                    <section>
                        <h3>Aquí va el nombre</h3>
                        <p>Copyright © 2019 </p>
                    </section>
                    <section>
                        <h4>Sobre nosotros</h4>
                        <p>¿Quiénes somos?</p>
                        <p>Equipo</p>
                        <p>Prensa</p>
                    </section>
                    <section>
                        <h4>Soporte</h4>
                        <p>¿Cómo funciona?</p>
                        <p>Preguntas frecuentes</p>
                        <p>Seguridad</p>
                    </section>
                    <section>
                        <h4>Legal</h4>
                        <p>Condiciones de uso</p>
                        <p>Política de privacidad</p>
                        <p>cookies</p>
                    </section>
                </div>

            </FooterTag>


        )
    }
}
