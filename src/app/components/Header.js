import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import theme from '../theme/theme';

const Header = () => {

    return (
        <AppBar
            color='secondary'
            position='sticky'
            sx={{ boxShadow: `0 0.5rem ${theme.palette.primary.main}` }}
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
