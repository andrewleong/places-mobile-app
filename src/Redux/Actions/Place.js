import _ from 'underscore';

import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './ActionTypes';

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

export const selectPlace = (placeKey) => {
    return {
        type: SELECT_PLACE,
        placeKey
    }
}

export const deselectPlace = (placeSelected) => {
    return {
        type: DESELECT_PLACE,
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

export const actionSelectPlace = (key) => {
    return (dispatch, getState) => {
        const state = getState();
        const placesData = {
            placeSelected: state.places.places.find((place)=> {
                return place.key === key;
            })
        }
        dispatch(selectPlace(placesData.placeSelected));
    }
}

export const actionDeselectPlace = () => {
    return dispatch => {
        const placesData = {
            placeSelected: null
        }
        dispatch(deselectPlace(placesData.placeSelected));
    }
}