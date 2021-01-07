import { actionTypes } from "../actionTypes"

const increaseCount = (state) => {
  let newState = { ...state };
  newState.count += 1;
  return newState
}

const decreaseCount = (state) => {
  let newState = { ...state };
  newState.count -= 1;
  return newState
}

const doLogout = (state) => {
  let newState = { ...state };
  newState.auth = null;
  return newState
}

const initialState = { count: 0, auth: null };
export default (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.INCREMENT:
      return increaseCount(state)

    case actionTypes.DECREMENT:
      return decreaseCount(state)

    case actionTypes.LOGOUT:
      return doLogout(state)

    default:
      return state

  }
}