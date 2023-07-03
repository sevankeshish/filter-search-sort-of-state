const redux = require("redux");
const createStore = redux.createStore;

const combineReducers = redux.combineReducers;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

//sakhte action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//esme in function action creator ast
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

//reducer => how to transfer state !

// const initialState = {
//   numOfCake: 10,
//   Shampo: 10,
// };
const initialStateCake = {
  numOfCake: 10,
};

const initialStateicecream = {
  numofIcecream: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return { ...state, numOfCake: state.numOfCake - 1 };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialStateCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialStateicecream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numofIcecream: state.numofIcecream };
    default:
      return state;
  }
};

const reducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(reducer, applyMiddleware(logger));
console.log("initialState", store.getState().cake);
console.log("initialState", store.getState().icecream);

// const unsubcribe = store.subscribe(() =>
//   console.log("updated state", store.getState())
// );
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
// unsubcribe();

// console.log(store);
