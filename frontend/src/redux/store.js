import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'

const initalState = {}

const persistConfig = {
    key:'main-root',
    storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
const middleware = [thunk]

const store = createStore(persistedReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

const Persistor = persistStore(store);

export {Persistor};
export default store;