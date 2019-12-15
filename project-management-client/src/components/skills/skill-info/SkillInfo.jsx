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
<<<<<<< HEAD
                    <li>Aquí va la categoría</li>
                    <li>Aquí va el rating</li>
                    {/* <p>{this.props.theSkill.direction}</p> */}
=======
                    <li>{this.props.theSkill.category}</li>
                    <li>{this.props.theSkill.averageRating}</li>
>>>>>>> b4748181e9afd21c0a325e98505710e60a7995f6
                </ul>
            </SkillInfoTag>
        )
    }
}
