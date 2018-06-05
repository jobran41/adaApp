import { createStore, combineReducers, compose, applyMiddleware } from "redux";
//import query from "react-hoc-query/lib/reducers"
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { createLogger } from "redux-logger"; // we need to fix this plugin only for dev environment
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

//import mutation from "modules/mutate/reducers"
//import sessionReducer from 'modules/auth/session';
import userReducer from "modules/auth/user";

const history = createHistory();
let middleware = [
  thunkMiddleware,
  promiseMiddleware(),
  routerMiddleware(history),
  createLogger()
];
const initState = {};
const rootReducer = combineReducers({
  initState,
  //query,
  // mutation,
  // sessionState: sessionReducer,
  userState: userReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
