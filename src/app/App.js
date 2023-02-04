import { Container, Stack } from '@mui/material';
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';

const users = [
  {
    id: '0',
    name: 'John Smith',
    honorific: 'Mr.',
    email: 'john.smith@test.com',
    isAdmin: true
  },
  {
    id: '2',
    name: 'Giuseppe Verdi',
    honorific: 'Mr.',
    email: 'giuseppe.verdi@test.com',
    isAdmin: false
  }
];

const App = () => {
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
          {users.map(user =>
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
