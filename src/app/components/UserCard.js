import { Box, Card, CardContent, Divider } from '@mui/material';
import { Stack } from '@mui/system';
import CardActions from './CardActions';
import CardBody from './CardBody';
import CardAvatar from './CardAvatar'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../redux/users/usersSlice';

const UserCard = ({ user }) => {
    const dispatch = useDispatch();
    const [honorific, setHonorific] = useState(user.honorific);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [isAdmin, setIsAdmin] = useState(user.isAdmin);
    const [editable, setEditable] = useState(false);

    const handleSave = () => {
        if (email && name) {
            setEditable(false);
            dispatch(editUser({
                id: user.id,
                honorific,
                name,
                email,
                isAdmin
            }));
        }
    };

    useEffect(() => {
        if (!user.email) {
            setEditable(true);
        }
    }, []);

    return (
        <Card sx={{ ...editable ? { boxShadow: 'none' } : {} }}>
            <CardContent sx={{
                padding: '0',
                ':last-child': { paddingBottom: '0' }
            }}
            >
                <Stack direction='row'>
                    <Box sx={{ width: '8%' }}>
                        <CardAvatar
                            name={name}
                        />
                    </Box>
                    <Divider
                        sx={{
                            borderColor: `${editable
                                ? 'common.white'
                                : 'secondary.main'}`,
                            borderWidth: '1px'
                        }}
                        orientation='vertical'
                        flexItem
                    />
                    <Box sx={
                        {
                            width: '92%',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '0.5rem 1rem'
                        }
                    }>
                        <CardBody
                            user={{ honorific, name, email, isAdmin }}
                            editable={editable}
                            isNew={!user.email}
                            onChangeName={(newValue) => setName(newValue)}
                            onChangeHonorific={(newValue) => setHonorific(newValue)}
                            onChangeEmail={(newValue) => setEmail(newValue)}
                            onChangeAdmin={() => setIsAdmin(state => !state)}
                        />
                        <CardActions
                            editable={editable}
                            onEdit={() => setEditable(state => !state)}
                            onDelete={() => dispatch(deleteUser(user.id))}
                            onSave={handleSave}
                        />
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default UserCard;
