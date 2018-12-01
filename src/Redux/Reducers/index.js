import { ADD_PLACE, DELETE_PLACE } from '../Actions/ActionTypes';

const initialState = {
    places: []
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
        default:
            return state;
    }
}

export default reducer;
