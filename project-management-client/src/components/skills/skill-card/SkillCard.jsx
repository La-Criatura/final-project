import React, { Component } from 'react'
import SkillCardTag from './SkillCardStyles'

export default class SkillCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SkillCardTag>
                <img src={this.props.theSkill.skillPicture} alt="" />
                <h2>{this.props.theSkill.title}</h2>
                <p>{this.props.theSkill.description}</p>
            </SkillCardTag>
        )
    }
}
