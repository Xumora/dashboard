import { getUsers, getPhotos, getTodos } from '../api/api'
import { SET_PHOTOS, SET_TODOS, SET_USERS } from './types'

const setUsers = async (dispatch) => {
    const res = await getUsers();
    if (res.success) {
        const action = { type: SET_USERS, payload: res.data };
        dispatch(action);
    }
}

const setPhotos = async (dispatch) => {
    const res = await getPhotos();
    if (res.success) {
        const action = { type: SET_PHOTOS, payload: res.data };
        dispatch(action);
    }
}

const setTodos = async (dispatch) => {
    const res = await getTodos();
    if (res.success) {
        const action = { type: SET_TODOS, payload: res.data };
        dispatch(action);
    }
}


export { setUsers, setPhotos, setTodos }
