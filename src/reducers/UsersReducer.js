/* 
 * UsersReducers.js
 * 
 * Représente Les réducteurs de module users de l'application
 * 
 */

// Import librairies for making component
import { FETCH_USERS_SUCCESS, FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, UPDATE__LIST_USERS, CURRENT_USER } from '../actions/ActionsUsers';

// Set init states
const initState = {
    users: [],
    currentUser: {},
    initUsers: [],
    errorUsers: {},
    isSuccessUsers: false,
    isFailureUsers: false,
    isLoadingUsers: false,
}

// Définition de la fonction groupsReducers qui permet de gérer 
// les actions de modules groups de l'application
export const usersReducers = (state = initState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.user
            }
        case UPDATE__LIST_USERS:
            return {
                ...state,
                users: action.newListUsers
            }
        case FETCH_USERS_BEGIN:
            return {
                ...state,
                isLoadingUsers: true,
                //users: []
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                initUsers: state.initUsers.concat(action.users),
                users: state.users.concat(action.users),
                isSuccessUsers: true,
                isFailureUsers: false,
                isLoadingUsers: false,
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                users: [],
                isSuccessUsers: false,
                isLoadingUsers: false,
                isFailureUsers: true,
                errorUsers: action.error
            }
        default:
            return state;
    }
}