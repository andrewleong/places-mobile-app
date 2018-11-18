import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
      <View style={styles.placesListItem}>
        <Image 
          source={props.placeImg}
          style={styles.placeImage}
          resizeMode="contain"
        />
        <Text>{props.place}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  placesListItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignContent: 'center',
  },
  placeImage: {
    width: 100,
    height: 50
  }
})

export default ListItem;