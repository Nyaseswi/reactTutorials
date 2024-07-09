import { applyMiddleware, createStore } from 'redux';
import mobileReducer from './reducer/mobile';
import createSagaMiddleware from 'redux-saga';
import { watchUser } from './sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(mobileReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUser)

export default store
