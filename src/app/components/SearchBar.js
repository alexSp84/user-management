import { Box, Button, FormGroup, TextField } from '@mui/material';
import UserAdd from '@mui/icons-material/PersonAddAlt1';
import { useDispatch } from 'react-redux';
import { createUser, setSearch } from '../redux/users/usersSlice';
import { useState } from 'react';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleAdd = () => {
        setValue('');
        dispatch(setSearch(''));
        dispatch(createUser());
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
        >
            <Button
                variant='contained'
                startIcon={<UserAdd />}
                onClick={handleAdd}
            >
                Add User
            </Button>
            <FormGroup row>
                <TextField
                    variant='outlined'
                    size='small'
                    placeholder='Search...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button
                    variant='contained'
                    disableElevation
                    onClick={() => dispatch(setSearch(value))}
                >
                    Search
                </Button>
            </FormGroup>
        </Box>
    );
};

export default SearchBar;
