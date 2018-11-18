import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, Image, View, Button, StyleSheet} from 'react-native';
import _ from 'underscore';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = ({placeSelected, onItemDeleted, onModalClosed}) => {
    let modalContent = null;

    if(placeSelected) {
        modalContent = (
            <View>
                <Image source={placeSelected ? placeSelected.img : null} style={styles.placeImg} />
                <Text style={styles.placeName}>{placeSelected.value}</Text>
            </View>  
        )
    }
    return (
        <Modal onRequestClose={onModalClosed} visible={ placeSelected !== null } animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <TouchableOpacity>
                        <View style={styles.deleteBtn}>
                            <Icon size={30} name="ios-trash" color="red" onPress={onItemDeleted} />
                        </View>
                    </TouchableOpacity>
                    <Button title="Close" color="green" onPress={onModalClosed} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImg: {
        width: '100%',
        height: 200,
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28,
    },
    deleteBtn: {
        alignItems: 'center',
    },
})

export default PlaceDetail;