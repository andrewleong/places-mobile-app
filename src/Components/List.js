import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';

const List = ({places, onItemSelected}) => {
    return (
        <FlatList
            data={places}
            renderItem={({item}) => {
                return (
                    <ListItem 
                        place={item.value} 
                        placeImg={item.img}
                        onItemPressed={() => onItemSelected(item.key)} 
                    />
                )
            }}
        />
    )   
}

export default List;