import styled from '@emotion/styled';
import { Switch, Typography } from '@mui/material';

const SwitchWithLabelStyle = styled('div')(({
    display: 'flex',
    alignItems: 'center'
}));

const SwitchWithLabel = ({ isAdmin, onChangeAdmin }) => {
    return (
        <SwitchWithLabelStyle>
            <Switch
                checked={isAdmin}
                onChange={onChangeAdmin}
                color='secondary'
            />
            <Typography
                variant={'subtitle1'}
                pl={1}
            >
                Admin
            </Typography>
        </SwitchWithLabelStyle>
    );
};

export default SwitchWithLabel;
