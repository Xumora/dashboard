import axios from "axios";

const getUsers = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

const getPhotos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

const getTodos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=20`)
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

const getUsersById = async (id) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false }
    }
}

export { getUsers, getUsersById, getPhotos, getTodos }