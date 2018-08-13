// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signup, signin, authenticate, initialize, logout } from './workers';

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}
function* watchSignin () {
    yield takeEvery(types.SIGNIN_ASYNC, signin);
}
function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}
function* watchInitialize () {
    yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}
function* watchLogout () {
    yield takeEvery(types.LOGOUT_ASYNC, logout);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchSignin), call(watchAuthenticate), call(watchInitialize), call(watchLogout)]);
}
