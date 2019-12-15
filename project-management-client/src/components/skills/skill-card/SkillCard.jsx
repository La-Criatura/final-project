import React, { Component } from 'react'
import SkillCardTag from './SkillCardStyles'

export default class SkillCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SkillCardTag >
                <img src={this.props.theSkill.skillPicture} alt="" />
                <h2>{this.props.theSkill.title}</h2>
                <div className="card-data">
                    <p>{this.props.theSkill.owner.username}</p>
                    <p>{this.props.theSkill.averageRating}</p>
                </div>
                <p>{this.props.theSkill.description}</p>
                {/* <p>{this.props.theSkill.direction}</p> */}
            </SkillCardTag>
        )
    }
}
