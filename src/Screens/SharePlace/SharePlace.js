import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import SearchBar from '../../Components/SearchBar';
import { addPlace } from '../../Redux/Actions';

class SharePlaceScreen extends Component {
    placeAddHandler = (placeName) => {
        this.props.onPlaceAdding(placeName);
    }
    render() {
        return (
            <View>
                <SearchBar onPlaceAdd={this.placeAddHandler} />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlaceAdding: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
