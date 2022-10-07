import { Reducer } from 'redux'

import { Action } from "../actions";
import { ActionType } from "../action_types";

interface UserState {
    isLoggedIn: Boolean,
    id?: Number,
    username: String,
    email?: String
}

const initalState = {
    isLoggedIn: false,
    username: '',
    email: '',
}

export const userReducer: Reducer<UserState, Action> = (state = initalState, action: Action) => {
    switch (action.type) {
        case ActionType.LOGIN_USER:
            const { id, username, email } = action.payload
            return {
                isLoggedIn: true,
                id: id,
                username: username,
                email: email,
            };
        default:
            return state;
    }
}