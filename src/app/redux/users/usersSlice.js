import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { sortBy } from 'lodash';

const initialState = {
    users: []
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        deleteUser(state, action) {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
        createUser(state) {
            state.users = [
                {
                    id: uuidv4(),
                    name: "",
                    honorific: "Mr.",
                    email: "",
                    isAdmin: false
                },
                ...state.users
            ]
        },
        editUser(state, action) {
            const newUsers = sortBy([
                action.payload,
                state.users.filter((user) => user.id !== action.payload.id)
            ], [(user) => user.name]);

            state.users = newUsers;
        }
    },
});

const { actions, reducer } = usersSlice;

export const {
    setUsers,
    deleteUser,
    createUser,
    editUser
} = actions;

export default reducer;
