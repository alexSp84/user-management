import theme from "../theme/theme";

export const stringAvatar = (name) => {
    return {
        sx: {
            bgcolor: theme.palette.info.main,
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
