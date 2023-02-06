import { Container, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import usersData from './data/users.json'
import { setUsers } from './redux/users/usersSlice';
import { sortBy } from 'lodash';
import { STORAGE_KEY } from './utils/constants';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const search = useSelector((state) => state.users.search);
  const [usersFound, setUsersFound] = useState();

  const userList = usersFound || users;

  useEffect(() => {
    if (search)
      setUsersFound(users.filter(
        (user) => user.email.toLowerCase().includes(search.toLowerCase()))
      );
    else
      setUsersFound();
  }, [search, users]);

  useEffect(() => {
    const storedUsersData = localStorage.getItem(STORAGE_KEY);
    if (!storedUsersData || storedUsersData === '[]') {
      const sortedUsers = sortBy(usersData, [(user) => user.name]);
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
          {userList?.map(user =>
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
