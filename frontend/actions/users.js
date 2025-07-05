import * as api from "../api/users.js";

export const fetchAllUsers = () => async (dispatch) => {
    try {
        const {data} = await api.getAllUsers();
        dispatch({type: "FETCH_USERS", payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = (id, updateData) => async (dispatch) => {
    try {
        const {data} = await api.updateProfile(id, updateData);
        dispatch({typr: "UPDATE_CURRENT_USER", payload: data});
    } catch (error) {
        console.log(error);
    }
}