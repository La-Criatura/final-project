
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
        center: {
            lat: 40.24,
            lng: -3.70
        },
        zoom: 15,
    };

    render() {
        console.log(this.props)
        const lat = this.props.location.coordinates[0];
        const lng = this.props.location.coordinates[1];
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={`${process.env.REACT_APP_GOOGLE_KEY}`}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker

                        lat={lat}
                        lng={lng}
                        name="My Marker"
                        color="blue"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapContainer;