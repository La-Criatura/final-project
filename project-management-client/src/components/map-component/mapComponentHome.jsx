
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainerHome extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        center: {
            lat: 40.4183,
            lng: -3.70275
        },
        zoom: 12,
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={`${process.env.REACT_APP_GOOGLE_KEY}`}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >

                    {this.props.listOfSkills.map((skill, idx) => {
                        return (
                            <Marker
                                key={idx}
                                lat={skill.location.coordinates[0]}
                                lng={skill.location.coordinates[1]}
                                name="My Marker"
                                color="blue"
                            />)
                    })}

                </GoogleMapReact>
            </div>
        );
    }
}

export default MapContainerHome;