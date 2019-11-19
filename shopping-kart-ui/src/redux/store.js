import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'


const store = createStore(rootReducer, applyMiddleware(logger,  ReduxThunk))

export default store