import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/";
import { composeWithDevTools } from "redux-devtools-extension";

export default () => {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(logger, thunk))
  );
};
