import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const initTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(sources => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: 'places.FindPlaceScreen',
                                    passProps: {
                                        text: 'This is tab 1'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Find Place',
                                    testID: 'FIND_PLACE',
                                    icon: sources[0]
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'places.SharePlaceScreen',
                                    passProps: {
                                        text: 'This is tab 2'
                                    }
                                }
                            }],
                            options: {
                                bottomTab: {
                                  text: 'Share Place',
                                  testID: 'SHARE_PLACE',
                                  icon: sources[1]
                                }
                            }
                        }
                    }]
                }
            }
        });
    })
}

export default initTabs;
