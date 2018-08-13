// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    isAuthenticated: false,
    isInitialized:   false,
});

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return state.set('isAuthenticated', true);
        case types.INITIALIZE:
            return state.set('isInitialized', true);
        case types.LOGOUT:
            return state.set('isAuthenticated', false);
        case types.SIGNIN_ASYNC:
            return state;
        default:
            return state;
    }
};
