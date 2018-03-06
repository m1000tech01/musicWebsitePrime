import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from 'remote-redux-devtools';

const configureStore = (initialState) => {

  const enhancers = [
    applyMiddleware(thunk),
  ];

  //enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());

  return createStore(rootReducer, initialState, compose(...enhancers));
}

export default configureStore;
