import { delay, put, takeEvery, takeLatest } from "redux-saga/effects"

function* buyMobileSuccess() {
    yield delay(60000)
    yield put({
        type: 'BUY_MOBILE_SUCCESS'
    })
}
export function* watchUser() {
    // yield takeEvery('BUY_MOBILE', buyMobileSuccess);
    yield takeLatest('BUY_MOBILE', buyMobileSuccess);
}