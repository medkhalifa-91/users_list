/* 
 * OBActionsGroups.js
 * OB Sphere Mobile
 * 
 * Représente la liste des actions de module groups de l'application
 * 
 */

import fetchUsers from "../api";

// Import librairies for making component

// les actions d'initialisation de la liste des groupes 
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const UPDATE__LIST_USERS = 'UPDATE__LIST_USERS';
export const CURRENT_USER = 'CURRENT_USER';


// Initialiser l'action de récuperation de la liste des utilisateurs pour la dispatcher.
const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    users: users
})


// Initialiser l'action de chargement de la liste utilisateurs pour la dispatcher.
const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
});

// Initialiser l'action de fin de chargement de la liste utilisateurs pour la dispatcher.
const fetchUsersFailure = (err) => ({
    type: FETCH_USERS_FAILURE,
    error: err
});

// Permet de dispatcher la nouvelle liste des utilisateurs à afficher
export function updateListeUsers(newListUsers) {
    return async function (dispatch, getState) {
        dispatch({
            type: UPDATE__LIST_USERS,
            newListUsers: newListUsers
        });
    }
}

// Permet de dispatcher le current  utilisateur visité
export function setCurrentUsers(user) {
    return async function (dispatch, getState) {
        dispatch({
            type: CURRENT_USER,
            user: user
        });
    }
}

// Créateur d'action dispatcher automatiquement (il dispatche l'action "fetchUsersSuccess")
// dispatcher les states de chaque composant de la liste des utilisateurs
// Permet de récupérer la liste des utilisateurs
export function fetchListUsers(nbrItem) {
    return async function (dispatch, getState) {
        dispatch(fetchUsersBegin());
        return fetchUsers(nbrItem).then((res) => {
            // dispatcher la liste des utilisateurs dans Redux
            dispatch(fetchUsersSuccess(res));
        }).catch((err) => {
            // dispatcher le message d'erreur dans Redux
            dispatch(fetchUsersFailure(err));
        });
    };
}