import React, { Component } from 'react'
import SkillCardTag from './SkillCardStyles'
import { Card } from 'react-bootstrap'

export default class SkillCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            // <SkillCardTag >
            //     <div className="image-container"><img src={this.props.theSkill.skillPicture} alt="" /></div>
            //     <h2>{this.props.theSkill.title}</h2>
            //     <div className="card-data">
            //         <p>{this.props.theSkill.owner.username}</p>
            //         <p>{this.props.theSkill.averageRating}</p>
            //     </div>
            //     <p>{this.props.theSkill.description}</p>
            // </SkillCardTag>

            <Card style={{ width: '20rem' }} className="has-shadow m-2" >
                <Card.Img style={{ height: '10rem', 'object-fit': 'cover'}} variant="top" src={this.props.theSkill.skillPicture} alt=""/>
                <Card.Body>
                    <Card.Title className="text-body no-decoration">{this.props.theSkill.title}</Card.Title>
                    <Card.Subtitle className="text-body no-decoration">{this.props.theSkill.owner.username}</Card.Subtitle>
                    <Card.Text className="wrapped-text text-body no-decoration">{this.props.theSkill.description}</Card.Text>
                </Card.Body>

            </Card>
        )
    }
}
