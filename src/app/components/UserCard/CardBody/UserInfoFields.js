import { MenuItem, Select, TextField } from '@mui/material';
import honorifics from '../../../data/honorifics.json'

const UserInfoFields = ({
    honorific,
    name,
    email,
    isNew,
    onChangeName,
    onChangeHonorific,
    onChangeEmail
}) => {

    return (
        <>
            <div>
                <Select
                    variant='outlined'
                    size='small'
                    value={honorific}
                    onChange={(e) => onChangeHonorific(e.target.value)}
                    sx={{ width: '6rem', backgroundColor: 'common.white' }}
                >
                    {honorifics.map(h =>
                        <MenuItem key={h} value={h}>
                            {h}
                        </MenuItem>
                    )}
                </Select>
                <TextField
                    variant='outlined'
                    size='small'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => onChangeName(e.target.value)}
                    sx={{
                        width: '20rem',
                        marginLeft: '0.5rem',
                        backgroundColor: 'common.white'
                    }}
                />
            </div>
            {isNew && <TextField
                variant='outlined'
                size='small'
                placeholder='Email'
                value={email}
                onChange={(e) => onChangeEmail(e.target.value)}
                sx={{
                    width: '20rem',
                    marginTop: '1rem',
                    backgroundColor: 'common.white'
                }}
            />}
        </>
    );
};

export default UserInfoFields;
