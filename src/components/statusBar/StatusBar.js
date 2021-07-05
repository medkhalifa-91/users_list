import React, { Component } from 'react';
import { StatusBar, Platform, SafeAreaView } from 'react-native';
import PropTypes from "prop-types";

// Définition de Component
class StatusBarComponent extends Component {

    // Constructeurs
    constructor() {
        super();
    }

    _renderStatusBar = () => {
        return (
            <StatusBar
                backgroundColor={this.props.backgroundColor}
                barStyle={this.props.barStyle}
                animated={this.props.animated} />
        );
    }

    _renderSafeAreaView = () => {
        return (
            <SafeAreaView
                backgroundColor={this.props.backgroundColor}
                style={this.props.style} />
        );
    }

    render() {
        return (
            (Platform.OS === 'ios') ?
                this._renderSafeAreaView()
                :
                this._renderStatusBar()
        )
    }
}

export { StatusBarComponent };

// Définition des PropTypes de ce composant
StatusBarComponent.propTypes = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.string,
    animated: PropTypes.bool,
    style: PropTypes.object,
};

// Définition des valeurs par défaut de ce composant
StatusBarComponent.defaultProps = {
    backgroundColor: '#248D9A',
    barStyle: "light-content",
    animated: false,
    style: {}
};