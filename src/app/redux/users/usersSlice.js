import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { sortBy } from 'lodash';
import { STORAGE_KEY } from '../../utils/constants';

const initialState = {
    list: [],
    search: '',
    found: undefined,
    paginated: [],
    page: 0,
    rows: 10
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.list = action.payload;
        },
        deleteUser(state, action) {
            const newUsers = state.list.filter((user) => user.id !== action.payload);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsers));
            state.list = newUsers;
        },
        createUser(state) {
            state.list = [
                {
                    id: uuidv4(),
                    name: '',
                    honorific: 'Mr.',
                    email: '',
                    isAdmin: false
                },
                ...state.list
            ]
        },
        editUser(state, action) {
            const newUsers = sortBy([
                action.payload,
                ...state.list.filter((user) => user.id !== action.payload.id)
            ], [(user) => user.name]);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsers));
            state.list = newUsers;
        },
        setSearch(state, action) {
            state.search = action.payload;
        },
        setFound(state, action) {
            state.found = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setRows(state, action) {
            state.rows = action.payload;
        },
        setPaginated(state, action) {
            state.paginated = action.payload;
        }
    },
});

const { actions, reducer } = usersSlice;

export const {
    setUsers,
    deleteUser,
    createUser,
    editUser,
    setSearch,
    setFound,
    setPage,
    setRows,
    setPaginated
} = actions;

export default reducer;
