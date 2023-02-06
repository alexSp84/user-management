import theme from '../theme/theme';

export const stringAvatar = (name) => {
    let children = '';
    if (name) {
        if (name.includes(' ') && name.split(' ')[0][0] && name.split(' ')[1][0])
            children = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
        else
            children = name[0];
    }
    return {
        sx: {
            bgcolor: theme.palette.info.main,
        },
        children: children.toUpperCase(),
    };
}
