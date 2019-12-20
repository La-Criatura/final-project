import React, { Component } from 'react'
import SkillCardTag from './SkillCardStyles'
import { Card } from 'react-bootstrap'
import axios from 'axios'

export default class SkillCardB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.theSkill
        }
    }

    getSingleSkill = () => {
        axios
          .get(`${process.env.REACT_APP_URL}/skills/${this.props.theSkill}`, {
            withCredentials: true
          })
          .then(responseFromApi => {
            const theSkill = responseFromApi.data;
            this.setState(theSkill);
          })
          .catch(err => {
            console.log(err);
          });
      };

    componentDidMount() {
        this.getSingleSkill()
    }

    render() {
        let category = this.state.category;
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
                <Card.Img style={{ height: '10rem', 'object-fit': 'cover'}} variant="top" src={this.state.skillPicture} alt=""/>
                <Card.Body>
                    <Card.Title className="text-body no-decoration">{this.state.title}</Card.Title>
                    {/* <Card.Text className="text-body no-decoration">{this.state.category}</Card.Text> */}
                    <Card.Text className="text-body no-decoration">{category}</Card.Text>
                    <Card.Text className="wrapped-text text-body no-decoration">{this.state.description}</Card.Text>
                </Card.Body>

            </Card>
        )
    }
}
