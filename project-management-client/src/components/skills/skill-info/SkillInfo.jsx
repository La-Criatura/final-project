import React, { Component } from 'react'
import SkillInfoTag from './SkillInfoStyles'

export default class SkillInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SkillInfoTag>
                <ul>
                    <li>{this.props.theSkill.title}</li>
                    <li>{this.props.theSkill.owner}</li>
                    <li>Aquí va la categoría</li>
                    <li>Aquí va el rating</li>
                </ul>
            </SkillInfoTag>
        )
    }
}
