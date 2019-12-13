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
    key: 'AIzaSyDPCzLGvuIyrk_QiXqXmHNDir_k1udry5',
    language: 'es'
}

export default class CustomMap extends Component {
    componentWillUnmount() {
        const allScripts = document.getElementsByTagName('script');
        [].filter.call(
            allScripts,
            (scpt) => scpt.src.indexOf('key=AIzaSyDE2XTOO3mc5CnZSdfeesVG0xVfs8L9DidM__0') >= 0
        )[0].remove();
        window.google = {};
    }


    componentDidMount() {
        loadGoogleMapsAPI(API_CONFIG).then(googleMaps => {
            new googleMaps.Map(this.refs.map, OPTIONS);
        }).catch(err => {
            console.warning('Something went wrong loading the map', err);
        });
    }

    render() {
        return (
            <div ref="map" style={MAP_STYLES}></div>
        )
    }
}
