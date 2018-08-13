// Core
import { applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
// Middleware
import { createLogger } from 'redux-logger';
import { customThunk } from "./custom";
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A417104',
        error:     () => '$ff005',
    },
});

const history = createBrowserHistory();
const routerMiddleWare = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devTools ? devTools : compose;

const middleware = [sagaMiddleware, customThunk, routerMiddleWare];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware, history };
