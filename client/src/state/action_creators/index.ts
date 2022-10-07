import { User } from '../../views/Login'

import { ActionType } from "../action_types"
import { Dispatch } from 'redux'
import { Action } from '../actions'

export const loginUser = (data: User) => {
    return (dispatch: Dispatch<Action>) => {

        fetch('/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password
                }
                )
            })
            .then(res => res.json())
            .then(json => {
                if (json.logged_in)
                    dispatch({
                        type: ActionType.LOGIN_USER,
                        payload: json
                    })
                else
                    return
            })
            .catch(error => console.log(error))

    }
}