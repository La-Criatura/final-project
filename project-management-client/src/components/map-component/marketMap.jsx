

import React from 'react';
import Geocode from "react-geocode";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

import { className } from "./helperMap";
// import "./searchStyle.css"

Geocode.setApiKey("AIzaSyDUeQXCyJDlhOtCB8JwWAk8zCxpjk6k-jo");

Geocode.setLanguage("es");

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '', lat: null, lng: null };
    }

    handleHola = address => {
        this.setState({ address });
        this.props.onAddressChange({ address });
    };


    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => {
                this.setState({ address: results[0].formatted_address })
                this.props.onAddressChange({ address: results[0].formatted_address })
                console.log(results[0])
                Geocode.fromAddress(results[0].formatted_address).then(
                    response => {
                        const { lat, lng } = response.results[0].geometry.location;
                        this.setState({ lat, lng })
                        this.props.onAddressChange({ address: this.state.address, lat, lng })
                        console.log(this.state);
                    },
                    error => {
                        console.error(error);
                    }
                );
            })
    };


    render() {
        return (
            <PlacesAutocomplete 
                value={this.state.address}
                onChange={this.handleHola}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="search-box-container">
                        <input
                            {...getInputProps({
                                placeholder: 'Introduce la dirección deseada ...',
                                className: 'col-12 rounded form-control',
                            })}
                        />
                        <div>
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput;
