/*
 * ScreenListUsers.js
 * 
 * Représente le screen de la liste des utilisateurs de l'application
 *
 */

// Import librairies for making component
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from "react-redux";
import HeaderListUsers from '../headers/HeaderListUsers';
import { fetchListUsers, updateListeUsers } from "../../actions/ActionsUsers";
import LoaderView from '../lists/loader/LoaderView';
import UserItem from '../lists/items/UserItem';

// Définition de la classe
class ScreenListUsers extends Component {

    // Constructeurs
    constructor(props) {
        super(props);
        this.state = {
            isTapSearch: false,
            searchText: "",
            isLoading: false,
            loadingMore: false,
            nbrItem: 15
        }
    }

    //#region 
    // Region de cycle de vie

    componentDidMount() {
        // Call API fetch users
        this.setState({
            isLoading: true
        }, () => {
            this.props.fetchListUsers(15).then(() => {
                this.setState({
                    isLoading: false
                });
            }).catch((err) => {
                this.setState({
                    isLoading: false
                });
            });
        });

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                    <LoaderView loadingText={'Chargement de la liste...'} />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <HeaderListUsers
                        navigationRef={this.props.navigation}
                        isTapSearch={this.state.isTapSearch}
                        onSearch={() => { this.onSearch() }}
                        onSearchUser={this.onSearchUser}
                        onCloseSearch={() => this.setState({ isTapSearch: false, searchText: "" })}
                    />
                    <FlatList
                        data={this.props.users}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        ListFooterComponent={this._renderFooter}
                        onRefresh={this._handleRefresh}
                        onEndReached={this._handleLoadMore}
                        onEndReachedThreshold={0.5}
                        refreshing={false}
                        style={styles.list} />
                </View>
            );
        }
    }

    //#endregion

    //#region
    // Region event
    onSearch = () => {
        this.setState({ isTapSearch: true })
    }
    onSearchUser = (text) => {
        let users = [];
        users = this.props.initUsers.filter(user => {
            if (user.username.toLowerCase().includes(text.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        });
        this.props.updateListeUsers(users);
    }


    // Méthode permettant de définir la clé primaire d'un item de la FlatList
    _keyExtractor = (item, index) => index.toString();

    // Méthode qui renvoi le rendu d'un élément de la liste des utilisateurs
    _renderItem = ({ item, index }) => {
        return (
            <UserItem
                item={item}
                navigationRef={this.props.navigation}
            />
        );
    }

    _renderFooter = () => {
        if (!this.state.loadingMore) return null;

        return (
            <View style={styles.footer}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    _handleRefresh = () => {
        // Call API fetch users
        this.setState({
            isLoading: true
        }, () => {
            this.props.fetchListUsers(15).then(() => {
                this.setState({
                    isLoading: false
                });
            }).catch((err) => {
                this.setState({
                    isLoading: false
                });
            });
        });
    };
    _handleLoadMore = () => {
        if (!this.state.isTapSearch) {
            this.setState((prevState, nextProps) => ({
                nbrItem: prevState.nbrItem + 15,
                loadingMore: true,
            }), () => {
                this.props.fetchListUsers(this.state.nbrItem);
            });
        }
    };
    //#endregion

}

// Définition des arguments que le composant a besoin
const mapToState = state => {
    return {
        isLoadingUsers: state.usersReducers.isLoadingUsers,
        users: state.usersReducers.users,
        initUsers: state.usersReducers.initUsers
    };
};
export default connect(mapToState, { fetchListUsers, updateListeUsers })(ScreenListUsers);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8FAFD'
    },
    list: {
        flex: 1,
        zIndex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    footer: {
        position: 'relative',
        width: '100%',
        height: 56,
        paddingVertical: 20,
        borderTopWidth: 0.5,
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#607D8B'
    }
});