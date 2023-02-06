import { MenuItem, Select, TextField } from "@mui/material";
import honorifics from "../data/honorifics.json"

const UserInfoFields = ({
    honorific,
    name,
    email,
    isAdmin,
    onChangeName,
    onChangeHonorific,
    onChangeEmail
}) => {

    return (
        <>
            <div>
                <Select
                    variant="outlined"
                    size="small"
                    value={honorific}
                    onChange={(e) => onChangeHonorific(e.target.value)}
                    sx={{ width: "6rem" }}
                >
                    {honorifics.map(h =>
                        <MenuItem key={h} value={h}>
                            {h}
                        </MenuItem>
                    )}
                </Select>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => onChangeName(e.target.value)}
                    sx={{ width: "20rem", marginLeft: "0.5rem" }}
                />
            </div>
            {!isAdmin && <TextField
                variant="outlined"
                size="small"
                placeholder="Email"
                value={email}
                onChange={(e) => onChangeEmail(e.target.value)}
                sx={{ width: "20rem", marginTop: "1rem" }}
            />}
        </>
    );
};

export default UserInfoFields;
