import React, { Component } from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api';
const MAP_STYLES = {
    height: '350px',
    width: '100%'
}
const OPTIONS = {
    center: {
        lat: 40.24,
        lng: -3.70
    },
    zoom: 16
}
const API_CONFIG = {
    key: process.env.REACT_APP_GOOGLE_KEY,
    language: 'es'
}
export default class CustomMap extends Component {
    componentWillUnmount() {
        const allScripts = document.getElementsByTagName('script');
        // [].filter.call(
        //     allScripts,
<<<<<<< HEAD
        //     (scpt) => scpt.src.indexOf(`key=${process.env.REACT_APP_GOOGLE_KEY}`) >= 0
        //)[0].remove();
=======
        //     (scpt) => scpt.src.indexOf(`key=${process.env.REACT_APP_GOOGLE_KEY}`) >= 0 )[0].remove();
>>>>>>> 9df95893c58523c044714ddc0c2fd7f80f2862ca
        window.google = {};
    }
    componentDidMount() {
        loadGoogleMapsAPI(API_CONFIG).then(googleMaps => {
            new googleMaps.Map(this.refs.map, OPTIONS);
        }).catch(err => {
            // console.warning('Something went wrong loading the map', err);
        });
    }
    render() {
        return (
            <div ref="map" style={MAP_STYLES}></div>
        )
    }
}