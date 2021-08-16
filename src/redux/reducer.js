import { SET_PHOTOS, SET_USERS, SET_TODOS } from './types'

const InitialState = {
    users: [],
    photos: [],
    todos: []
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };

        case SET_PHOTOS:
            return { ...state, photos: action.payload };

        case SET_TODOS:
            return { ...state, todos: action.payload };
        default: return state;
    }
}

export default reducer;