import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from './actions';

// console.log(actions);

// let initialState = true;
const modal = createReducer(true, {
    [actions.toggleModal]: (_, { payload }) => !payload,
});

export default combineReducers(
    {
        modal,

    }
)