import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            placesName: ''
        }
    }

    onSubmitPlaces = () => {
        const emptyPlaces = this.state.placesName.trim() === '';
        if(emptyPlaces) return;
        this.props.onPlaceAdd(this.state.placesName);
    }

    render() {
        return (
            <View style={styles.searchBarContainer}>
            <TextInput 
                style={styles.searchBar}
                placeholder={"search cool place"}
                onChangeText={(placesName) => this.setState({placesName})}
                value={this.state.placesName} 
            />
            <Button 
                style={styles.searchBarBtn}
                title={"Add"}
                onPress={this.onSubmitPlaces}
            />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBar: {
        width: '60%',
    },
    searchBarBtn: {
        width: '30%'
    },
})

export default SearchBar;