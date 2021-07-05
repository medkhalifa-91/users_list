/**
 * HeaderListUsers.js
 * 
 */

// Import librairies for making component
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from "prop-types";
import SearchBar from './SearchBar';

// Définition de la classe
class HeaderListUsers extends Component {

    // Constructeurs
    constructor() {
        super();
    }

    state = {
        isTapSearch: false,
    }
    //#endRegion


    //#region 
    // Cycle de vie du composant

    componentDidMount() {
        // Add Listener
        this.didFocusListener = this.props.navigationRef.addListener('blur', async (payload) => {
            if (this.state.isTapSearch) {
                this.props.onSearchUser("");
                this.props.onCloseSearch();
            }
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isTapSearch != this.props.isTapSearch) {
            this.setState({
                isTapSearch: this.props.isTapSearch
            })
        }
    }

    componentWillUnmount() {
        // Remove Listener
        this.didFocusListener();
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    !this.state.isTapSearch ?
                        <View style={styles.headerContainer}>
                            <View style={styles.iconContainer}>

                            </View>

                            <View style={styles.containerTitleScreen}>
                                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.titleScreen}>{'Liste des utilisateurs'}</Text>
                            </View>

                            <View style={styles.iconContainer}>
                                <TouchableOpacity
                                    style={[styles.button]}
                                    onPress={this.props.onSearch}>
                                    {
                                        <Image
                                            source={require('../../../assets/ic_nb_search.png')}
                                            resizeMode={'contain'}
                                            style={[styles.icon]} />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style={styles.viewSearch}>
                            <SearchBar
                                onSearchChange={(text) => { this.props.onSearchUser(text) }}
                                height={40}
                                onBackPress={this._onBackPress}
                                placeholder={'Cherchez un utilisateur...'}
                                autoCorrect={false}
                                padding={0}
                                returnKeyType={'search'}
                            />
                        </View>
                }


            </View>
        )
    }


    //#region 
    // Region des événements
    _onBackPress = () => {
        this.props.onSearchUser("");
        this.props.onCloseSearch();
    }

    //#endregion
}


export default (HeaderListUsers);


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        // Android
        elevation: 10,
        // IOS
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
    },
    viewSearch: {
        height: 56,
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
        borderBottomStartRadius: 16,
        justifyContent: 'center',
        backgroundColor: '#248D9A'
    },
    headerContainer: {
        flexDirection: 'row',
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
        width: '100%',
        height: 56,
        backgroundColor: '#248D9A',
    },
    iconContainer: {
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTitleScreen: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 16,
        marginRight: 16,
    },
    titleScreen: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center'
    },

    containerSubHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 56 * 0.6,
        backgroundColor: '#F8FAFD',
    },
    iconContainerSubHeader: {
        height: 56 * 0.6,
        //width: 56,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleContainerSubHeader: {
        flex: 1,
        paddingRight: 16,
        marginLeft: 16,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleSubHeader: {
        fontSize: 14,
        color: '#FFF'
    },
    button: {
        height: 24
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: '#FFF'
    }
})


// Définition des PropTypes de ce composant
HeaderListUsers.propTypes = {
    titleHeader: PropTypes.string,
    goBack: PropTypes.func,
    onPress: PropTypes.func,
}

// Définition des valeurs par défaut de ce composant
HeaderListUsers.defaultProps = {
    titleHeader: '',
    goBack: () => { },
    onPress: () => { },
}