import { store } from "../redux/store";
import {
    setFound,
    setPage,
    setPaginated,
    setUsers
} from "../redux/users/usersSlice";
import { STORAGE_KEY } from "./constants";
import { orderBy } from 'lodash';
import usersData from '../data/users.json';

export function getUsers() {
    const storedUsersData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    
    if (!storedUsersData.length) {
        const sortedUsers = orderBy(usersData, [(user) => user.name.toLowerCase()], ['asc']);
        store.dispatch(setUsers(sortedUsers));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedUsers));
    } else {
        store.dispatch(setUsers(storedUsersData));
    }
}

export function getUsersByEmail() {
    const { users: { search, list } } = store.getState();

    store.dispatch(setPage(0));
    if (search)
        store.dispatch(setFound(list.filter(
            (user) => user.email.toLowerCase().includes(search.toLowerCase()))
        ));
    else
        store.dispatch(setFound());
}

export function getPaginatedUsers() {
    const { users: { list, found, page, rows } } = store.getState();

    let paginatedList = [];
    const userList = found || list;
    const start = page * rows;
    const max = start + rows;
    const last = userList.length < max ? userList.length : max;

    for (let i = start; i < last; i++)
        paginatedList.push(userList[i]);

    store.dispatch(setPaginated(paginatedList));
}
