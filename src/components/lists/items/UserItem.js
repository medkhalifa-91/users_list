/* 
 * UserItem.js
 * 
 * Reresente un elemnt de la liste des utilisateurs
 * 
 */

// Import librairies for making component
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import { connect } from "react-redux";
import { setCurrentUsers } from '../../../actions/ActionsUsers';
import UserAvatar from "react-native-user-avatar";



// définition de la classe
class UserItem extends Component {

    //#region Constructeurs   
    constructor(props) {
        // Appel du constructeur de Component
        super(props);
        // Initialise les propriétés du composant
        this.state = {

        };
    }
    //#endregion

    //#region Cycle de vie du Component

    render() {
        return (
            <TouchableHighlight
                onPress={() => this._onPress(this.props.item)}
                underlayColor={'#8faecc'}>
                <View style={styles.rowContainer}>
                    <View>
                        <UserAvatar
                            size={40}
                            name={this.props.item.username} />
                    </View>

                    <View style={styles.rowTextContainer}>
                        <Text style={styles.rowMainText} numberOfLines={1} ellipsizeMode={'tail'}>{this.props.item.username}</Text>
                        <Text style={styles.rowSecondaryText} numberOfLines={1} ellipsizeMode={'tail'}>{this.props.item.job}</Text>
                    </View>
                </View>
            </TouchableHighlight>

        );
    }


    _onPress(item) {
        // save current in Redux
        this.props.setCurrentUsers(item);
        // navigate vers le detail d'un utilisateur
        this.props.navigationRef.navigate('ScreenDetailUser');
    }
    


}

// Définition des arguments que le composant a besoin
const mapToState = state => {
    return {
    };
};

export default connect(mapToState, { setCurrentUsers })(UserItem);

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        margin: 72,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
    },
    rowTextContainer: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 16,
    },
    rowMainText: {
        fontSize: 16,
        color: '#455A64',
        marginBottom: 4,
    },
    rowSecondaryText: {
        fontSize: 14,
        color: '#78909C'
    },
    image: {
        width: 40,
        height: 40,
        tintColor: '#616262'
    }
});

// Propriétés
UserItem.propTypes = {
    item: PropTypes.string,
};

// Valeurs par défaut
UserItem.defaultProps = {
    item: {},
};