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

export default (state = { count: 0 }, action) => {

  switch (action.type) {

    case actionTypes.INCREMENT:
      return increaseCount(state)

    case actionTypes.DECREMENT:
      return decreaseCount(state)

    default:
      return state

  }
}