import { Container, Stack, TablePagination } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { setPage, setRows } from './redux/users/usersSlice';
import { getPaginatedUsers, getUsers, getUsersByEmail } from './utils/services';

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
    getUsersByEmail();
  }, [search, users]);

  useEffect(() => {
    getPaginatedUsers();
  }, [page, rows, usersFound, users]);

  useEffect(() => {
    getUsers();
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
