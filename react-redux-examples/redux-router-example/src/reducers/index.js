import {actionTypes} from "../actionTypes"

const increaseCount = (state) => {
    let newState = {...state};
    newState.count += 1;
    return newState
}

const decreaseCount = (state) => {
    let newState = {...state};
    newState.count -= 1;
    return newState
}

const doLogout = (state) => {
    let newState = {...state};
    newState.auth = null;
    return newState
}

const setAuthToState = (state, data) => {
    let newState = {...state};
    newState.auth = data;
    return newState
}

const initialState = {count: 0, auth: null};
export default (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INCREMENT:
            return increaseCount(state)

        case actionTypes.DECREMENT:
            return decreaseCount(state)

        case actionTypes.LOGOUT:
            return doLogout(state)

        case actionTypes.AUTH_DATA:
            return setAuthToState(state, action.data);

        default:
            return state

    }
}
