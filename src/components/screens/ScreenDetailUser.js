
/*
 * ScreenDetailUser.js
 * 
 * Représente le screen de detail d'un user de l'application
 *
 */

// Import librairies for making component
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from "react-redux";
import UserAvatar from "react-native-user-avatar";

// Définition de la classe
class ScreenDetailUser extends Component {

    // Constructeurs
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <ScrollView style={styles.container}>
                {/* Avatar User */}
                <View style={{ marginBottom: 64 }}>
                    <View style={styles.containerAvatar}>

                        <UserAvatar
                            size={80}
                            name={this.props.currentUser.username} />

                        <Text style={styles.username}>{this.props.currentUser.username}</Text>
                        <Text style={[styles.job]}>{this.props.currentUser.job}</Text>

                    </View>
                </View>

                {/* Information Account */}
                <View style={styles.containerInfo}>
                    <Text style={styles.bio}>{this.props.currentUser.bio}</Text>
                </View>
            </ScrollView>
        );
    }
}

// Définition des arguments que le composant a besoin
const mapToState = state => {
    return {
        currentUser: state.usersReducers.currentUser,
    };
};
export default connect(mapToState, {})(ScreenDetailUser);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFD',
    },
    containerAvatar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8FAFD',
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16
    },
    username: {
        marginTop: 16,
        fontSize: 18,
        color: '#455A64'
    },
    job: {
        marginTop: 6,
        fontSize: 12,
        color: '#78909C'
    },
    bio: {
        margin: 12,
        fontSize: 14,
        color: '#263238'
    },
    containerInfo: {
        backgroundColor: '#F8FAFD',
        marginTop: 16,
    },
});