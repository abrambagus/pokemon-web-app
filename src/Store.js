import {createStore, applyMiddleware} from 'redux';
import RootReducer from './Reducer/RootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'data',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, RootReducer);

  const middleware = composeWithDevTools(applyMiddleware(thunk))

  let Store = createStore(persistedReducer, middleware);

  let Persistor = persistStore(Store);


  // const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

  export {Store, Persistor} ;

  // export default Store;