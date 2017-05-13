
import {Container} from 'flux/utils';

import appstore from './AppStore';
import actions from './AppActions';
import App from "./App";

import dispatcher from './AppDispatcher';

function getStores() {
  return [appstore];
}

function getState() {
  return appstore.getState().merge(actions).toObject();
}

// setInterval(function(){
//   dispatcher.dispatch("increment");
// }, 3000);

export default Container.createFunctional(App, getStores, getState);
