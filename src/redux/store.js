import { applyMiddleware, createStore, combineReducers } from 'redux';
import mobileReducer from './reducer/mobile';
import userReducer from './reducer/user';
import createSagaMiddleware from 'redux-saga';
import { watchUser } from './sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    mobile: mobileReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUser);

export default store;
