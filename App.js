// @flow
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/stores/store';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
//import RootNavigator from './src/components/navigators/RootNavigator';
import usersStackNavigator from './src/components/navigators/UsersStack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBarComponent } from './src/components/statusBar/StatusBar';
import fetchUsers from './src/api';

// définition de la stack 
const stackNavigator = createStackNavigator();

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBarComponent />
        <NavigationContainer>
          <stackNavigator.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <stackNavigator.Screen
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                headerShown: false
              }}
              name="usersStackNavigator"
              component={usersStackNavigator} />
          </stackNavigator.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
