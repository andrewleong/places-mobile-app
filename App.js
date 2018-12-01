import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/Screens/Auth/Auth';
import SharePlaceScreen from './src/Screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/Screens/FindPlace/FindPlace';
import PlaceDetail from './src/Components/PlaceDetail';
import configStore from './src/Redux/ConfigStore';

const store = configStore();

const withReduxStoreWrapper = (MyComponent, store) =>
    class StoreWrapper extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <MyComponent />
                </Provider>
            );
        }
    };

// Register screens
// These needs to be unique identifier
Navigation.registerComponent("places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("places.SharePlaceScreen", () => withReduxStoreWrapper(SharePlaceScreen, store));
Navigation.registerComponent("places.FindPlaceScreen", () => withReduxStoreWrapper(FindPlaceScreen, store));
Navigation.registerComponent("places.PlaceDetail", () => withReduxStoreWrapper(PlaceDetail, store));

// Start the app
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'places.AuthScreen',
            options: {
              topBar: {
                title: {
                  text: 'Login'
                }
              }
            }
          }
        }]
      }
    }
  });
});
