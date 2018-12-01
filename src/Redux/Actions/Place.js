import _ from 'underscore';

import { ADD_PLACE, DELETE_PLACE } from './ActionTypes';

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName
    }
}

export const deletePlace = (places, placeSelected) => {
    return {
        type: DELETE_PLACE,
        places,
        placeSelected
    }
}

// Functions
export const actionAddPlace = (placesName) => {
    return (dispatch, getState) => {
        const key = _.uniqueId('id_');
        const state = getState();
        const placesData = {
            places: [...state.places.places, {
                key,
                value: placesName,
                img: {
                    uri: 'https://cdn2.veltra.com/ptr/20140619125030_1407380016_2644_0.jpg?imwidth=550&impolicy=custom'
                }
            }]
        }
        dispatch(addPlace(placesData.places));
    }
}

export const actionDeletePlace = () => {
    return (dispatch, getState) => {
        const state = getState();
        const placesData = {
            places: state.places.places.filter( (place) => place.key !== state.places.placeSelected.key),
            placeSelected: null,
        }
        const { places, placeSelected } = placesData;
        dispatch(deletePlace(places, placeSelected));
    }
}
