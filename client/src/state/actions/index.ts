import { User } from '../../views/Login'

import { ActionType } from '../action_types/index'

interface LoginUser {
    type: ActionType.LOGIN_USER,
    payload: User
}

export type Action = LoginUser