import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../Actions/ActionTypes';

const initialState = {
    places: [],
    placeSelected: null 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE: 
            return {
                ...state,
                places: action.placeName
            };
        case DELETE_PLACE: 
            return {
                ...state,
                places: action.places,
                placeSelected: action.placeSelected
            };
        case SELECT_PLACE: 
            return {
                ...state,
                placeSelected: action.placeKey
            };
        case DESELECT_PLACE: 
            return {
                ...state,
                placeSelected: action.placeSelected
            };
        default:
            return state;
    }
}

export default reducer;