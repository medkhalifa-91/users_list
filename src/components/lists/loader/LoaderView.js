import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LottieAnimation from 'lottie-react-native';

class LoaderView extends Component {

    // Rendu
    render() {
        return (
            <View style={[styles.overlay, { backgroundColor: this.props.overlayColor }]}>
                <LottieAnimation
                    ref={this.animation}
                    source={require("./loader.json")}
                    speed={1}
                    autoPlay
                    style={styles.loader} />
                <Text style={styles.text} numberOfLines={10}>{this.props.loadingText}</Text>
            </View>
        );
    }
}

export default LoaderView;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    loader: {
        width: 140,
        height: 140
    },

    text: {
        width: '80%',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 32,
        color: '#607D8B'
    }
});

// Propriétés
LoaderView.propTypes = {
    overlayColor: PropTypes.string,
    loadingText: PropTypes.string
};

// Valeurs par défaut
LoaderView.defaultProps = {
    overlayColor: '#FFF' + "E6",
    loadingText: ""
};