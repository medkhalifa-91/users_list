/* 
 * index.js
 * 
 * Combine Les réducteurs de l'app dans un seul réducteur
 * 
 */

// Import librairies for making component
import { combineReducers } from 'redux';
import { usersReducers } from './UsersReducer';



export default function getReducers() {

    // combine à nouveau leurs résultats en un seul objet ou en un seul reducteur.
    return combineReducers({
      usersReducers: usersReducers
    });
}