//import {createStore, compose, applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
// Import thunk middleware
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState,
    // Apply to store
    applyMiddleware(thunk)
  );
}
