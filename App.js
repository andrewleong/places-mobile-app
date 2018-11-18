// import React from 'react';
// import { connect } from 'react-redux';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import _ from 'underscore';
// // childs
// import SearchBar from './src/Components/SearchBar';
// import List from './src/Components/List';
// import PlaceDetail from './src/Components/PlaceDetail';

// import placeImg from './src/Assets/munich_castle.jpg';

// import { actionAddPlace, actionDeletePlace, actionSelectPlace, actionDeselectPlace } from './src/Redux/Actions/index';

// class App extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   placeAddHandler = (placesName) => {
//     this.props.onPlaceAdd(placesName);
//   }

//   placeSelectedHandler = (key) => {
//     this.props.onPlaceSelect(key);
//   }

//   placeDeletedHandler = () => {
//     this.props.onPlaceDelete();
//   }

//   modalClosedHandler = () => {
//     this.props.onPlaceDeselect();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Andrew Wants Macbook!</Text>
//         <PlaceDetail
//           placeSelected={this.props.placeSelected}
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <SearchBar onPlaceAdd={this.placeAddHandler}/>
//         <View
//           style={styles.placesListContainer}>
//             <List
//               places={this.props.places}
//               onItemSelected={this.placeSelectedHandler}
//             />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   placesListContainer: {
//     width: '100%',
//   },
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     placeSelected: state.places.placeSelected,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onPlaceAdd: (placesName) => dispatch(actionAddPlace(placesName)),
//     onPlaceDelete: () => dispatch(actionDeletePlace()),
//     onPlaceSelect: (key) => dispatch(actionSelectPlace(key)),
//     onPlaceDeselect: () => dispatch(actionDeselectPlace()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/Screens/Auth/Auth';

// Register screens
Navigation.registerComponent("places.AuthScreen", () => AuthScreen);

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
