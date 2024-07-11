import axios from "axios"
import { delay, put, takeEvery, takeLatest, all, call } from "redux-saga/effects"

function* buyMobileSuccess() {
    yield delay(60000)
    yield put({
        type: 'BUY_MOBILE_SUCCESS'
    })
}

function* sellMobileSuccess() {
    yield delay(60000)
    yield put({
        type: 'SELL_MOBILE_SUCCESS'
    })
}

function* getAllUsers() {
    try {
        let users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put({ type: 'GET_ALL_USERS_SUCCESS', data: users.data })

    } catch (error) {
        yield put({ type: 'GET_ALL_USERS_FAILED', message: error.message })
    }
}

function* getSingleUser({ id }) {
    try {
        let users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users' + id);
        yield put({ type: 'GET_SINGLE_USER_SUCCESS', data: users.data })

    } catch (error) {
        yield put({ type: 'GET_SINGLE_USER_FAILED', message: error.message })
    }
}



export function* watchUser() {
    // yield takeEvery('BUY_MOBILE', buyMobileSuccess);
    // yield takeLatest('BUY_MOBILE', buyMobileSuccess);
    yield all([
        takeLatest('BUY_MOBILE_SUCCESS', buyMobileSuccess),
        takeLatest('SELL_MOBILE_SUCCESS', sellMobileSuccess),
        takeLatest('GET_ALL_USERS', getAllUsers),
        takeLatest('GET_SINGLE_USER', getSingleUser),

    ])
}