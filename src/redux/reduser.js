import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from './actions';

// console.log(actions);

const modal = createReducer(null, {
    [actions.toggleModal]: (_, { payload }) => payload,
});

export default combineReducers(
    {
        modal,

    }
)