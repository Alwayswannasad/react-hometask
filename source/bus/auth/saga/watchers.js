// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signup, signin } from './workers';

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

function* watchSignin () {
    yield takeEvery(types.SIGNIN_ASYNC, signin);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchSignin)]);
}
