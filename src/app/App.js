import { Container, Stack, TablePagination } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import usersData from './data/users.json'
import {
  setFound,
  setPage,
  setPaginated,
  setRows,
  setUsers
} from './redux/users/usersSlice';
import { orderBy } from 'lodash';
import { STORAGE_KEY } from './utils/constants';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const usersFound = useSelector((state) => state.users.found);
  const search = useSelector((state) => state.users.search);
  const page = useSelector((state) => state.users.page);
  const rows = useSelector((state) => state.users.rows);
  const paginatedUsers = useSelector((state) => state.users.paginated);

  const onRowsPerPageChange = (e) => {
    dispatch(setRows(e.target.value));
    dispatch(setPage(0));
  };

  const onPageChange = (e, newPage) =>
    dispatch(setPage(newPage));

  useEffect(() => {
    dispatch(setPage(0));
    if (search)
      dispatch(setFound(users.filter(
        (user) => user.email.toLowerCase().includes(search.toLowerCase()))
      ));
    else
      dispatch(setFound());
  }, [search, users]);

  useEffect(() => {
    let list = [];
    const userList = usersFound || users;
    const start = page * rows;
    const max = start + rows;
    const last = userList.length < max ? userList.length : max;

    for (let i = start; i < last; i++)
      list.push(userList[i]);

    dispatch(setPaginated(list));
  }, [page, rows, usersFound, users]);

  useEffect(() => {
    const storedUsersData = localStorage.getItem(STORAGE_KEY);
    if (!storedUsersData || storedUsersData === '[]') {
      const sortedUsers = orderBy(usersData, [(user) => user.name.toLowerCase()], ['asc']);
      dispatch(setUsers(sortedUsers));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedUsers));
    } else {
      dispatch(setUsers(JSON.parse(localStorage.getItem(STORAGE_KEY))));
    }
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Stack
          direction='column'
          spacing={2}
          mt={4}
          mb={6}
        >
          <SearchBar />
          {paginatedUsers.map(user =>
            <UserCard
              key={user.id}
              user={user}
            />
          )}
          <TablePagination
            component='div'
            count={usersFound?.length || users.length}
            page={page}
            onPageChange={onPageChange}
            rowsPerPage={rows}
            onRowsPerPageChange={onRowsPerPageChange}
          />
        </Stack>
      </Container>
    </div>
  );
}

export default App;
