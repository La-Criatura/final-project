import React, { Component } from 'react'
import SkillInfoTag from './SkillInfoStyles'

export default class SkillInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SkillInfoTag>
                <ul className="d-flex align-items-center justify-content-between bg-light text-dark py-2 mb-2 w-80 ">
                    <li className="mx-1 form-control bg-light text-dark" >{this.props.theSkill.title}</li>
                    <li className="mx-1 form-control bg-light text-dark" >{this.props.theSkill.owner.username}</li>
                    <li className="mx-1 form-control bg-light text-dark" >{(this.props.theSkill.category).charAt(0).toUpperCase() + (this.props.theSkill.category).slice(1)}</li>
                    <li className="mx-1 form-control bg-light text-dark wrapped-text" >{this.props.theSkill.description}</li>
                </ul>
            </SkillInfoTag>
        )
    }
}
