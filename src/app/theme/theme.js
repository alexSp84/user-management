import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F1E4DB'
        },
        secondary: {
            main: '#000000'
        },
        background: {
            paper: '#FAF6F2',
            default: '#FAF6F2'
        },
        info: {
            main: '#6F94B3'
        },
    },
    typography: {
        button: {
            textTransform: 'none'
        },
        subtitle1: {
            fontWeight: 'bold',
        },
    }
});

export default theme;