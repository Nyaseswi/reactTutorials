import { createStore } from 'redux';
import mobileReducer from './reducer/mobile'

const store = createStore(mobileReducer);

export default store
