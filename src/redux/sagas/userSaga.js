import { delay, put, takeEvery, takeLatest, all } from "redux-saga/effects"

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
export function* watchUser() {
    // yield takeEvery('BUY_MOBILE', buyMobileSuccess);
    // yield takeLatest('BUY_MOBILE', buyMobileSuccess);
    yield all([
        takeLatest('BUY_MOBILE_SUCCESS', buyMobileSuccess),
        takeLatest('SELL_MOBILE_SUCCESS', sellMobileSuccess),

    ])
}