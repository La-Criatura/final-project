
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
        zoom: 15,
    };

    render() {
        const lat = this.props.location.coordinates[0];
        const lng = this.props.location.coordinates[1];
        const center = { lat, lng }
        return (

            <div style={{ height: '70vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={`${process.env.REACT_APP_GOOGLE_KEY}`}

                    defaultCenter={center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={lat}
                        lng={lng}
                        name="My Marker"
                        color="red"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapContainer;