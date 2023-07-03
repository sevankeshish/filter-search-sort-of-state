const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxThunk = require("redux-thunk").default;
const axios = require("axios");
const { default: logger } = require("redux-logger");

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUsersError(error) {
  return {
    type: FETCH_USERS_ERROR,
    paylod: error,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    paylod: users,
  };
}

const initialState = {
  loading: false,
  error: "",
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_ERROR:
      return { loading: false, error: action.paylod, data: [] };
    case FETCH_USERS_SUCCESS:
      return { loading: false, error: "", data: action.paylod };
    default:
      return state;
  }
};

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const userId = res.data.map((u) => u.id);
        dispatch(fetchUsersSuccess(userId));
      })
      .catch((error) => {
        dispatch(fetchUsersError(error));
      });
  };
};

const store = createStore(reducer, applyMiddleware(reduxThunk, logger));

store.dispatch(fetchUser());
