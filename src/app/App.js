import { Container, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import usersData from './data/users.json'
import { setUsers } from './redux/users/usersSlice';
import { sortBy } from 'lodash';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const sortedUsers = sortBy(usersData, [(user) => user.name]);
    dispatch(setUsers(sortedUsers));
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Stack
          direction="column"
          spacing={2}
          mt={4}
          mb={6}
        >
          <SearchBar />
          {users?.map(user =>
            <UserCard
              key={user.id}
              user={user}
            />
          )}
        </Stack>
      </Container>
    </div>
  );
}

export default App;
