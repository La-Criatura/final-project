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
                    <li className="skill-title">{this.props.theSkill.title}</li>
                    <li>{this.props.theSkill.owner.username}</li>
                    <li>{this.props.theSkill.category}</li>
                    <li>{this.props.theSkill.averageRating}</li>
                </ul>
            </SkillInfoTag>
        )
    }
}
