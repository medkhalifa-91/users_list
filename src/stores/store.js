// @flow

import { createStore, applyMiddleware } from 'redux';
import getReducers from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(
  // Une fonction réductrice qui renvoie l' arborescence d'état suivante , 
  // en fonction de l'arborescence d'état actuelle et d'une action à gérer.
  getReducers(),

  // l'état initial. Vous pouvez éventuellement le spécifier pour hydrater l'état
  // du serveur dans les applications universelles ou pour restaurer 
  // une session utilisateur précédemment sérialisée.
  {},


  // Le rehausseur de magasin. Vous pouvez éventuellement le spécifier pour 
  // améliorer le magasin avec des fonctionnalités tierces telles que le middleware, 
  // le voyage dans le temps, la persistance, etc. Le seul enrichisseur de 
  // magasin livré avec Redux est applyMiddleware().
  applyMiddleware(thunk)
);;

//sagaMiddleware.run(/* Your root saga */);

export default store;
