import React, { Component } from 'react'
import SkillCardTag from './SkillCardStyles'
import { Card } from 'react-bootstrap'
import axios from 'axios'

export default class SkillCardB extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let category = this.props.theSkill.category;
        // category = category.charAt(0).toUpperCase() + category.slice(1)
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
                    {/* <Card.Text className="text-body no-decoration">{this.props.theSkill.category}</Card.Text> */}
                    <Card.Text className="text-body no-decoration">{category}</Card.Text>
                    <Card.Text className="wrapped-text text-body no-decoration">{this.props.theSkill.description}</Card.Text>
                </Card.Body>

            </Card>
        )
    }
}
