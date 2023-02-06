import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header = () => {

    return (
        <AppBar
            color='secondary'
            position='sticky'
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
            >
                <Toolbar>
                    <Typography
                        variant='h4'
                        sx={{ color: 'common.white' }}
                    >
                        User management
                    </Typography>
                </Toolbar>
            </Box>
        </AppBar>

    );
};

export default Header;
