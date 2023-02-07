import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import { stringAvatar } from '../../utils/utils';

const CardAvatarStyle = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

const CardAvatar = ({ name }) => {

    return (
        <CardAvatarStyle>
            <Avatar {...stringAvatar(name)} />
        </CardAvatarStyle>
    );
};

export default CardAvatar;
