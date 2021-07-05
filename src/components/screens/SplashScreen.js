
/* 
 * SplashScreen.js
 * Open Bee Mobile
 * 
 * Created by OB_Mohamed_Ben_Khalifa on 03-07-2020
 * Copyright ©2020 Openbee. All rights reserved.
 */


// making import 
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { connect } from "react-redux";


// définition de la classe
class SplashScreen extends Component {

    //#region Constructeurs 
    constructor(props) {
        // Appel du constructeur de Component
        super(props);
        // Initialise les propriétés du composant
        this.state = {
            deviceWidth: Dimensions.get('window').width,
            deviceHeight: Dimensions.get('window').height,
        }
    }
    //#endRegion

    

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

// Définition des arguments que le composant a besoin
const mapToState = state => {
    return {

    };
};
export default connect(mapToState, { })(SplashScreen);