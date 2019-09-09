import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import nameReducer from "./reducer/namereducer";
import gameReducer from "./reducer/gamereducer";
import weaponReducer from "./reducer/weaponReducer";
import thunk from "redux-thunk";

const initialStates = {
  name: { name: "Aditya" },
  game: { game: "Cricket" },
  weapons: { load: true }
};

//Combined Reducer

const allReducer = combineReducers({
  name: nameReducer,
  game: gameReducer,
  weapons: weaponReducer,
  load: weaponReducer
});

const middleware = [thunk];

const store = createStore(
  allReducer,
  initialStates,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
