/*
UsersStack.js
*/

// Make import
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from "react";
import { Platform, Image } from 'react-native';
import ScreenListUsers from '../screens/ScreenListUsers';
import ScreenDetailUser from '../screens/ScreenDetailUser';


const stackNavigator = createStackNavigator();


export default usersStackNavigator = ({ navigation }) => (
    <stackNavigator.Navigator
        screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            headerMode: 'screen',
            headerStyle: {
                backgroundColor: '#F8FAFD',
                borderBottomWidth: 0,
                // Android
                elevation: 8,
                // iOS
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowOffset: {
                    height: 2,
                },
                shadowRadius: 2,
            },
        }}>

        <stackNavigator.Screen
            options={{
                headerShown: false
            }}
            name="ScreenListUsers"
            component={ScreenListUsers} />
        <stackNavigator.Screen
            options={({ route, navigation }) => ({
                title: 'Détail utilisateur',
                headerStyle: {
                    backgroundColor: '#248D9A',
                    borderBottomWidth: 0,
                    // Android
                    elevation: 8,
                    // iOS
                    shadowColor: '#000',
                    shadowOpacity: 0.4,
                    shadowOffset: {
                        height: 2,
                    },
                    shadowRadius: 2,
                    borderBottomEndRadius: 16,
                    borderBottomStartRadius: 16,
                    borderBottomStartRadius: 16,
                },
                headerTitleStyle: {
                    fontSize: 20,
                    color: '#FFF',
                    textAlign: 'center',
                    fontWeight: Platform.OS === 'ios' ? null : "200"
                },
                /*Button cancel*/
                headerBackImage: () => (
                    <Image source={require('../../../assets/ic_search_back.png')}
                        resizeMode={'contain'}
                        style={{ width: 24, height: 24, tintColor: '#FFF', marginLeft: Platform.OS == "ios" ? 12 : null }} />
                ),
            })}
            name="ScreenDetailUser"
            component={ScreenDetailUser} />

    </stackNavigator.Navigator>
);
