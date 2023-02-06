import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const IconWithLabelStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

const IconWithLabel = ({ text, icon }) => {

    return (
        <IconWithLabelStyle>
            {icon}
            <Typography
                variant={'subtitle2'}
                pl={1}
            >
                {text}
            </Typography>
        </IconWithLabelStyle>
    );
};

export default IconWithLabel;
