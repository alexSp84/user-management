import { Box, Button, FormGroup, TextField } from "@mui/material";
import UserAdd from '@mui/icons-material/PersonAddAlt1';
import { useDispatch } from "react-redux";
import { createUser } from "../redux/users/usersSlice";

const SearchBar = () => {
    const dispatch = useDispatch();

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between"
        }}
        >
            <Button
                variant="contained"
                startIcon={<UserAdd />}
                onClick={() => dispatch(createUser())}
            >
                Add User
            </Button>
            <FormGroup row>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search..."
                />
                <Button
                    variant="contained"
                    disableElevation
                >
                    Search
                </Button>
            </FormGroup>
        </Box>
    );
};

export default SearchBar;
