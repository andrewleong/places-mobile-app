import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';

import placesReducer from './Reducers';

const rootReducer = combineReducers({
    places: placesReducer,
})

// Add redux tools debugger
let composeEnhancers = compose;

// if in development mode // DEV is react-native global vars
if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configStore = () => {
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
}

export default configStore;